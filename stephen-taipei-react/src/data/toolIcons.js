// Tool Icon System
// Maps tool types and names to appropriate icons

import {
  Type, Hash, GitCompare, FileText, Code, Palette, Image,
  Calculator, Link, QrCode, Lock, Clock, Shuffle, Search,
  Layers, Box, Gamepad2, Puzzle, Cpu, Zap, Layout, Grid,
  List, Table, FormInput, User, Mail, CreditCard, ShoppingCart,
  BarChart, PieChart, LineChart, Play, Music, Video, Camera,
  Globe, Server, Database, Terminal, Settings, Wand2, Sparkles,
  RefreshCw, Download, Upload, Copy, Scissors, Eraser, PenTool,
  Eye, EyeOff, FileJson, FileCode, Binary, Braces, MessageSquare,
  Bell, Menu, Navigation, Award, Users, BookOpen, HelpCircle
} from 'lucide-react';

// Icon mapping by tool name patterns
const namePatternIcons = [
  // Text tools
  { pattern: /case|text|string|char/i, icon: Type },
  { pattern: /word|count|counter/i, icon: Hash },
  { pattern: /diff|compare/i, icon: GitCompare },
  { pattern: /lorem|placeholder/i, icon: FileText },
  { pattern: /markdown|md/i, icon: FileText },
  { pattern: /json/i, icon: FileJson },
  { pattern: /code|syntax/i, icon: Code },
  { pattern: /regex|pattern/i, icon: Braces },

  // Encoding/Security
  { pattern: /base64|encode|decode/i, icon: Binary },
  { pattern: /url|uri/i, icon: Link },
  { pattern: /hash|md5|sha/i, icon: Lock },
  { pattern: /uuid|guid|id/i, icon: Hash },
  { pattern: /password|secret/i, icon: Lock },
  { pattern: /encrypt|decrypt/i, icon: Lock },

  // Visual tools
  { pattern: /color|palette|picker/i, icon: Palette },
  { pattern: /image|photo|picture/i, icon: Image },
  { pattern: /qr|barcode/i, icon: QrCode },
  { pattern: /icon/i, icon: Sparkles },
  { pattern: /gradient/i, icon: Palette },
  { pattern: /shadow|border/i, icon: Layers },

  // Time/Date
  { pattern: /time|date|timestamp|clock/i, icon: Clock },
  { pattern: /calendar/i, icon: Clock },

  // Math/Calculation
  { pattern: /calc|math|number/i, icon: Calculator },
  { pattern: /random|shuffle/i, icon: Shuffle },
  { pattern: /convert|transform/i, icon: RefreshCw },

  // Charts
  { pattern: /chart|graph/i, icon: BarChart },
  { pattern: /pie/i, icon: PieChart },
  { pattern: /line/i, icon: LineChart },

  // Media
  { pattern: /video/i, icon: Video },
  { pattern: /audio|sound|music/i, icon: Music },
  { pattern: /camera|screenshot/i, icon: Camera },
  { pattern: /play|player/i, icon: Play },

  // UI Components (Tailwind templates)
  { pattern: /nav|navigation|menu|header/i, icon: Menu },
  { pattern: /hero|banner/i, icon: Layout },
  { pattern: /feature|feat/i, icon: Sparkles },
  { pattern: /content|article/i, icon: FileText },
  { pattern: /cta|action|button/i, icon: Play },
  { pattern: /price|pricing/i, icon: CreditCard },
  { pattern: /testimonial|review|test-/i, icon: MessageSquare },
  { pattern: /team|member/i, icon: Users },
  { pattern: /gallery|grid/i, icon: Grid },
  { pattern: /footer/i, icon: Layout },
  { pattern: /form|input/i, icon: FormInput },
  { pattern: /auth|login|register/i, icon: User },
  { pattern: /card/i, icon: CreditCard },
  { pattern: /list/i, icon: List },
  { pattern: /modal|dialog|popup/i, icon: Layers },
  { pattern: /notification|alert|toast/i, icon: Bell },
  { pattern: /landing/i, icon: Globe },
  { pattern: /dashboard/i, icon: BarChart },
  { pattern: /ecommerce|shop|store/i, icon: ShoppingCart },
  { pattern: /blog|post/i, icon: BookOpen },
  { pattern: /community|social/i, icon: Users },

  // Games
  { pattern: /game|play/i, icon: Gamepad2 },
  { pattern: /puzzle/i, icon: Puzzle },
  { pattern: /horror|scary/i, icon: EyeOff },

  // Tech
  { pattern: /wasm|assembly/i, icon: Cpu },
  { pattern: /worker|thread/i, icon: Zap },
  { pattern: /api|server/i, icon: Server },
  { pattern: /database|db/i, icon: Database },
  { pattern: /terminal|cli|command/i, icon: Terminal },

  // Actions
  { pattern: /generator|create|make/i, icon: Wand2 },
  { pattern: /viewer|preview/i, icon: Eye },
  { pattern: /editor|edit/i, icon: PenTool },
  { pattern: /format|beautif/i, icon: Sparkles },
  { pattern: /minif|compress/i, icon: Download },
  { pattern: /copy|clipboard/i, icon: Copy },
  { pattern: /download/i, icon: Download },
  { pattern: /upload/i, icon: Upload },
  { pattern: /search|find/i, icon: Search },
  { pattern: /setting|config/i, icon: Settings },
];

// Category-specific default icons
const categoryDefaultIcons = {
  'ai-local-tools': Sparkles,
  'web-toys': Box,
  'tailwind-templates': Layout,
  'chrome-extensions': Puzzle,
  'free-games': Gamepad2,
  'mini-tools': Settings,
  'wasm-tools': Cpu,
  'web-workers': Zap,
};

// Sub-category specific icons
const subCategoryIcons = {
  // Tailwind templates
  '01-navigation': Navigation,
  '02-hero-sections': Layout,
  '03-features': Sparkles,
  '04-content': FileText,
  '05-cta': Play,
  '06-pricing': CreditCard,
  '07-testimonials': MessageSquare,
  '08-team': Users,
  '09-gallery': Grid,
  '10-footers': Layout,
  '10-forms': FormInput,
  '11-authentication': User,
  '12-cards': CreditCard,
  '12-lists': List,
  '13-modals': Layers,
  '14-notifications': Bell,
  '20-landing-pages': Globe,
  '99-dashboard': BarChart,
  '100-ecommerce': ShoppingCart,
  '101-blog': BookOpen,
  '102-community': Users,

  // Chrome extensions
  '01-productivity': Zap,
  '10-experimental': Sparkles,

  // Games
  'horror': EyeOff,
  'puzzle': Puzzle,
  'arcade': Gamepad2,
  'action': Zap,
  'card': CreditCard,
  'runner': Navigation,

  // Mini tools
  '01-text': Type,
  '25-other': Settings,

  // WASM tools
  'image': Image,
  'calculation': Calculator,

  // Web workers
  '01-computation': Calculator,
  '11-scientific-computing': BarChart,
  '12-machine-learning': Cpu,
};

/**
 * Get icon component for a tool
 * @param {Object} tool - Tool object with slug, name, category
 * @param {string} categoryId - Main category ID
 * @returns {React.Component} Lucide icon component
 */
export function getToolIcon(tool, categoryId) {
  // Check sub-category first
  if (tool.category && subCategoryIcons[tool.category]) {
    return subCategoryIcons[tool.category];
  }

  // Check tool name patterns
  const toolName = tool.name || tool.slug || '';
  for (const { pattern, icon } of namePatternIcons) {
    if (pattern.test(toolName)) {
      return icon;
    }
  }

  // Fall back to category default
  return categoryDefaultIcons[categoryId] || HelpCircle;
}

/**
 * Get sub-category color scheme
 * @param {string} subCategory - Sub-category ID
 * @param {string} categoryId - Main category ID
 * @returns {Object} Color scheme with bg and text classes
 */
export function getSubCategoryColor(subCategory, categoryId) {
  const colorSchemes = {
    // Blues
    '01-navigation': { bg: 'bg-blue-50', text: 'text-blue-600' },
    '01-productivity': { bg: 'bg-blue-50', text: 'text-blue-600' },
    '01-text': { bg: 'bg-blue-50', text: 'text-blue-600' },
    '01-computation': { bg: 'bg-blue-50', text: 'text-blue-600' },

    // Purples
    '02-hero-sections': { bg: 'bg-purple-50', text: 'text-purple-600' },
    '10-experimental': { bg: 'bg-purple-50', text: 'text-purple-600' },

    // Greens
    '03-features': { bg: 'bg-green-50', text: 'text-green-600' },
    'puzzle': { bg: 'bg-green-50', text: 'text-green-600' },

    // Teals
    '04-content': { bg: 'bg-teal-50', text: 'text-teal-600' },

    // Oranges
    '05-cta': { bg: 'bg-orange-50', text: 'text-orange-600' },
    '25-other': { bg: 'bg-orange-50', text: 'text-orange-600' },

    // Yellows
    '06-pricing': { bg: 'bg-yellow-50', text: 'text-yellow-700' },
    'calculation': { bg: 'bg-yellow-50', text: 'text-yellow-700' },

    // Pinks
    '07-testimonials': { bg: 'bg-pink-50', text: 'text-pink-600' },

    // Indigos
    '08-team': { bg: 'bg-indigo-50', text: 'text-indigo-600' },
    '11-scientific-computing': { bg: 'bg-indigo-50', text: 'text-indigo-600' },

    // Cyans
    '09-gallery': { bg: 'bg-cyan-50', text: 'text-cyan-600' },

    // Grays
    '10-footers': { bg: 'bg-gray-100', text: 'text-gray-600' },
    '10-forms': { bg: 'bg-slate-50', text: 'text-slate-600' },

    // Reds
    '11-authentication': { bg: 'bg-red-50', text: 'text-red-600' },
    'horror': { bg: 'bg-red-50', text: 'text-red-600' },
    'arcade': { bg: 'bg-indigo-50', text: 'text-indigo-600' },
    'action': { bg: 'bg-orange-50', text: 'text-orange-600' },
    'card': { bg: 'bg-blue-50', text: 'text-blue-600' },
    'runner': { bg: 'bg-emerald-50', text: 'text-emerald-600' },

    // Roses
    '12-cards': { bg: 'bg-rose-50', text: 'text-rose-600' },
    '12-lists': { bg: 'bg-rose-50', text: 'text-rose-600' },

    // Violets
    '13-modals': { bg: 'bg-violet-50', text: 'text-violet-600' },
    '12-machine-learning': { bg: 'bg-violet-50', text: 'text-violet-600' },

    // Ambers
    '14-notifications': { bg: 'bg-amber-50', text: 'text-amber-600' },

    // Emeralds
    '20-landing-pages': { bg: 'bg-emerald-50', text: 'text-emerald-600' },

    // Sky
    '99-dashboard': { bg: 'bg-sky-50', text: 'text-sky-600' },

    // Lime
    '100-ecommerce': { bg: 'bg-lime-50', text: 'text-lime-700' },

    // Fuchsia
    '101-blog': { bg: 'bg-fuchsia-50', text: 'text-fuchsia-600' },

    // Stone
    '102-community': { bg: 'bg-stone-100', text: 'text-stone-600' },

    // Image
    'image': { bg: 'bg-pink-50', text: 'text-pink-600' },
  };

  return colorSchemes[subCategory] || { bg: 'bg-gray-50', text: 'text-gray-600' };
}

export default { getToolIcon, getSubCategoryColor };
