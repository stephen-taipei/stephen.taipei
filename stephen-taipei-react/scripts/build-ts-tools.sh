#!/bin/bash

# Build TypeScript files in submodule tools
# This script compiles all .ts files to .js and updates HTML references

set -e

TOOLS_DIR="src/tools"

echo "=== Building TypeScript tools ==="

# Find all .ts files (excluding node_modules and .d.ts files)
find "$TOOLS_DIR" -name "*.ts" -not -path "*/node_modules/*" -not -name "*.d.ts" | while read -r tsfile; do
    jsfile="${tsfile%.ts}.js"
    echo "Compiling: $tsfile -> $jsfile"

    # Compile with esbuild
    esbuild "$tsfile" --outfile="$jsfile" --format=esm --target=es2020 --bundle --minify 2>/dev/null || {
        # If bundle fails (due to external imports), try without bundle
        esbuild "$tsfile" --outfile="$jsfile" --format=esm --target=es2020 --minify 2>/dev/null || {
            echo "  Warning: Failed to compile $tsfile"
        }
    }
done

# Find all .tsx files (excluding node_modules)
find "$TOOLS_DIR" -name "*.tsx" -not -path "*/node_modules/*" | while read -r tsxfile; do
    jsfile="${tsxfile%.tsx}.js"
    echo "Compiling: $tsxfile -> $jsfile"

    esbuild "$tsxfile" --outfile="$jsfile" --format=esm --target=es2020 --loader:.tsx=tsx --minify 2>/dev/null || {
        echo "  Warning: Failed to compile $tsxfile"
    }
done

echo ""
echo "=== Updating HTML references ==="

# Cross-platform sed -i (macOS vs Linux)
sedi() {
    if [[ "$OSTYPE" == "darwin"* ]]; then
        sed -i '' "$@"
    else
        sed -i "$@"
    fi
}

# Update HTML files to reference .js instead of .ts
find "$TOOLS_DIR" -name "*.html" -not -path "*/node_modules/*" | while read -r htmlfile; do
    if grep -q '\.ts"' "$htmlfile" 2>/dev/null; then
        echo "Updating: $htmlfile"
        sedi 's/\.ts"/\.js"/g' "$htmlfile"
        sedi 's/\.tsx"/\.js"/g' "$htmlfile"
    fi
done

echo ""
echo "=== Build complete ==="
