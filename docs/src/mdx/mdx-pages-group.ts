import { Frontmatter, MdxPagesCategory, MdxPagesGroup } from '@/types';
import { MDX_META_DATA } from './data/mdx-meta-data';
import { MDX_DATA } from './mdx-data';

export const MDX_PAGES_GROUPS: MdxPagesGroup[] = [
  {
    group: 'theming',
    pages: [
      MDX_DATA.MantineProvider,
      MDX_DATA.ThemeObject,
      MDX_DATA.Colors,
      MDX_DATA.ColorSchemes,
      MDX_DATA.Typography,
      MDX_DATA.DefaultProps,
    ],
  },
  {
    group: 'styles',
    pages: [
      MDX_DATA.StylesOverview,
      MDX_DATA.MantineStyles,
      MDX_DATA.CSSFilesList,
      MDX_DATA.CSSModules,
      MDX_DATA.PostCSSPreset,
      MDX_DATA.UsageWithSass,
      MDX_DATA.VanillaExtract,
      MDX_DATA.GlobalStyles,
      MDX_DATA.CssVariables,
      MDX_DATA.CSSVariablesList,
      MDX_DATA.Rem,
      MDX_DATA.StyleProp,
      MDX_DATA.ResponsiveStyles,
      MDX_DATA.StylesApi,
      MDX_DATA.DataAttributes,
      MDX_DATA.VariantsAndSizes,
      MDX_DATA.UnstyledComponents,
      MDX_DATA.StyleProps,
      MDX_DATA.ColorFunctions,
      MDX_DATA.Rtl,
      MDX_DATA.StylesPerformance,
    ],
  },
  {
    group: 'guides',
    pages: [
      MDX_DATA.Polymorphic,
      MDX_DATA.Icons,
      MDX_DATA.NextJs,
      MDX_DATA.Vite,
      MDX_DATA.Remix,
      MDX_DATA.Gatsby,
      MDX_DATA.Redwood,
      MDX_DATA.Storybook,
      MDX_DATA.TypeScript,
      MDX_DATA.JavaScript,
      MDX_DATA.Jest,
      MDX_DATA.FunctionsReference,
      MDX_DATA.SixToSeven,
    ],
  },
  {
    group: 'mantine-hooks',
    pages: [
      {
        category: 'UI and Dom',
        pages: [
          MDX_DATA.useClickOutside,
          MDX_DATA.useColorScheme,
          MDX_DATA.useElementSize,
          MDX_DATA.useEventListener,
          MDX_DATA.useFocusReturn,
          MDX_DATA.useFocusTrap,
          MDX_DATA.useFocusWithin,
          MDX_DATA.useFullscreen,
          MDX_DATA.useHotkeys,
          MDX_DATA.useHover,
          MDX_DATA.useIntersection,
          MDX_DATA.useMediaQuery,
          MDX_DATA.useMouse,
          MDX_DATA.useMove,
          MDX_DATA.useReducedMotion,
          MDX_DATA.useResizeObserver,
          MDX_DATA.useScrollIntoView,
          MDX_DATA.useViewportSize,
          MDX_DATA.useWindowEvent,
          MDX_DATA.useWindowScroll,
          MDX_DATA.useInViewport,
        ],
      },

      {
        category: 'State management',
        pages: [
          MDX_DATA.useCounter,
          MDX_DATA.useDebouncedState,
          MDX_DATA.useDebouncedValue,
          MDX_DATA.useDisclosure,
          MDX_DATA.useId,
          MDX_DATA.useInputState,
          MDX_DATA.useListState,
          MDX_DATA.useLocalStorage,
          MDX_DATA.usePrevious,
          MDX_DATA.useQueue,
          MDX_DATA.useSetState,
          MDX_DATA.useToggle,
          MDX_DATA.useUncontrolled,
          MDX_DATA.useValidatedState,
          MDX_DATA.usePagination,
        ],
      },

      {
        category: 'Utilities',
        pages: [
          MDX_DATA.useClipboard,
          MDX_DATA.useDocumentTitle,
          MDX_DATA.useDocumentVisibility,
          MDX_DATA.useEyeDropper,
          MDX_DATA.useFavicon,
          MDX_DATA.useHash,
          MDX_DATA.useHeadroom,
          MDX_DATA.useIdle,
          MDX_DATA.useInterval,
          MDX_DATA.useMergedRef,
          MDX_DATA.useNetwork,
          MDX_DATA.useOs,
          MDX_DATA.usePageLeave,
          MDX_DATA.useTextSelection,
          MDX_DATA.useTimeout,
        ],
      },

      {
        category: 'Lifecycle',
        pages: [
          MDX_DATA.useDidUpdate,
          MDX_DATA.useForceUpdate,
          MDX_DATA.useIsomorphicEffect,
          MDX_DATA.useLogger,
          MDX_DATA.useShallowEffect,
        ],
      },
    ],
  },
  {
    group: 'mantine-form',
    pages: [
      MDX_DATA.useForm,
      MDX_DATA.formValues,
      MDX_DATA.formGetInputProps,
      MDX_DATA.formErrors,
      MDX_DATA.formValidation,
      MDX_DATA.formSchemaValidation,
      MDX_DATA.formValidators,
      MDX_DATA.formNested,
      MDX_DATA.formStatus,
      MDX_DATA.createFormContext,
      MDX_DATA.formActions,
      MDX_DATA.formRecipes,
    ],
  },
  {
    group: 'mantine-core',
    pages: [
      {
        category: 'layout',
        pages: [
          MDX_DATA.Container,
          MDX_DATA.Center,
          MDX_DATA.Group,
          MDX_DATA.Stack,
          MDX_DATA.AspectRatio,
          MDX_DATA.AppShell,
          MDX_DATA.SimpleGrid,
          MDX_DATA.Grid,
          MDX_DATA.Space,
          MDX_DATA.Flex,
        ],
      },
      {
        category: 'inputs',
        pages: [
          MDX_DATA.Input,
          MDX_DATA.ColorPicker,
          MDX_DATA.NativeSelect,
          MDX_DATA.SegmentedControl,
          MDX_DATA.Slider,
          MDX_DATA.Switch,
          MDX_DATA.TextInput,
          MDX_DATA.Checkbox,
          MDX_DATA.Radio,
          MDX_DATA.Fieldset,
          MDX_DATA.PinInput,
          MDX_DATA.Chip,
          MDX_DATA.Rating,
          MDX_DATA.Textarea,
          MDX_DATA.JsonInput,
          MDX_DATA.PasswordInput,
          MDX_DATA.FileInput,
          MDX_DATA.ColorInput,
          MDX_DATA.NumberInput,
        ],
      },
      {
        category: 'combobox',
        pages: [
          MDX_DATA.Combobox,
          MDX_DATA.Pill,
          MDX_DATA.PillsInput,
          MDX_DATA.Autocomplete,
          MDX_DATA.TagsInput,
          MDX_DATA.Select,
          MDX_DATA.MultiSelect,
        ],
      },
      {
        category: 'buttons',
        pages: [
          MDX_DATA.ActionIcon,
          MDX_DATA.Button,
          MDX_DATA.CloseButton,
          MDX_DATA.CopyButton,
          MDX_DATA.FileButton,
          MDX_DATA.UnstyledButton,
        ],
      },
      {
        category: 'navigation',
        pages: [
          MDX_DATA.Anchor,
          MDX_DATA.Tabs,
          MDX_DATA.Breadcrumbs,
          MDX_DATA.Burger,
          MDX_DATA.Pagination,
          MDX_DATA.Stepper,
          MDX_DATA.NavLink,
        ],
      },
      {
        category: 'feedback',
        pages: [
          MDX_DATA.Loader,
          MDX_DATA.Alert,
          MDX_DATA.Notification,
          MDX_DATA.Skeleton,
          MDX_DATA.Progress,
          MDX_DATA.RingProgress,
        ],
      },
      {
        category: 'overlays',
        pages: [
          MDX_DATA.Popover,
          MDX_DATA.Tooltip,
          MDX_DATA.Overlay,
          MDX_DATA.Affix,
          MDX_DATA.Modal,
          MDX_DATA.Drawer,
          MDX_DATA.HoverCard,
          MDX_DATA.Menu,
          MDX_DATA.LoadingOverlay,
          MDX_DATA.Dialog,
        ],
      },
      {
        category: 'Data display',
        pages: [
          MDX_DATA.BackgroundImage,
          MDX_DATA.ColorSwatch,
          MDX_DATA.Kbd,
          MDX_DATA.Badge,
          MDX_DATA.Avatar,
          MDX_DATA.Accordion,
          MDX_DATA.Indicator,
          MDX_DATA.Card,
          MDX_DATA.Image,
          MDX_DATA.ThemeIcon,
          MDX_DATA.Timeline,
          MDX_DATA.Spoiler,
          MDX_DATA.NumberFormatter,
        ],
      },
      {
        category: 'typography',
        pages: [
          MDX_DATA.Blockquote,
          MDX_DATA.Code,
          MDX_DATA.Highlight,
          MDX_DATA.Mark,
          MDX_DATA.Table,
          MDX_DATA.Text,
          MDX_DATA.Title,
          MDX_DATA.TypographyStylesProvider,
          MDX_DATA.List,
        ],
      },
      {
        category: 'misc',
        pages: [
          MDX_DATA.Collapse,
          MDX_DATA.FocusTrap,
          MDX_DATA.Paper,
          MDX_DATA.Portal,
          MDX_DATA.ScrollArea,
          MDX_DATA.Transition,
          MDX_DATA.VisuallyHidden,
          MDX_DATA.Divider,
          MDX_DATA.Box,
        ],
      },
    ],
  },
  {
    group: 'mantine-dates',
    pages: [
      MDX_DATA.GettingStartedDates,
      MDX_DATA.DatesProvider,
      MDX_DATA.Calendar,
      MDX_DATA.DateInput,
      MDX_DATA.DateTimePicker,
      MDX_DATA.DatePicker,
      MDX_DATA.DatePickerInput,
      MDX_DATA.MonthPicker,
      MDX_DATA.MonthPickerInput,
      MDX_DATA.YearPicker,
      MDX_DATA.YearPickerInput,
      MDX_DATA.TimeInput,
    ],
  },
  {
    group: 'mantine-charts',
    pages: [
      MDX_DATA.GettingStartedCharts,
      MDX_DATA.AreaChart,
      MDX_DATA.BarChart,
      MDX_DATA.LineChart,
      MDX_DATA.DonutChart,
      MDX_DATA.Sparkline,
    ],
  },
  {
    group: 'extensions',
    pages: [
      MDX_DATA.CodeHighlight,
      MDX_DATA.Notifications,
      MDX_DATA.Spotlight,
      MDX_DATA.Carousel,
      MDX_DATA.Dropzone,
      MDX_DATA.Nprogress,
      MDX_DATA.Modals,
      MDX_DATA.TipTap,
    ],
  },
  {
    group: 'changelog',
    pages: [
      MDX_DATA.Changelog750,
      MDX_DATA.Changelog740,
      MDX_DATA.Changelog730,
      MDX_DATA.Changelog720,
      MDX_DATA.Changelog710,
      MDX_DATA.Changelog700,
      MDX_DATA.AllReleases,
    ],
  },
];

export const NAVIGATION_MDX_PAGES: Frontmatter[] = MDX_PAGES_GROUPS.reduce<Frontmatter[]>(
  (acc, group) => {
    group.pages.forEach((item) => {
      if (item.category) {
        const categoryPages = [...(item as MdxPagesCategory).pages];
        categoryPages.sort((a, b) => a.title.localeCompare(b.title));
        acc.push(...categoryPages);
      } else {
        acc.push(item as Frontmatter);
      }
    });

    return acc;
  },
  []
);

export const SEARCH_MDX_PAGES: Frontmatter[] = [
  ...NAVIGATION_MDX_PAGES,
  ...Object.keys(MDX_META_DATA).map((key) => MDX_META_DATA[key]),
  {
    title: 'Combobox examples',
    slug: '/combobox/?e=BasicSelect',
    search: '50+ examples of Combobox usage',
  },
  {
    title: 'AppShell examples',
    slug: '/app-shell/?e=BasicAppShell',
    search: '10+ examples of AppShell usage',
  },
].reduce<Frontmatter[]>((acc, item) => {
  if (!acc.some((accItem) => accItem.slug === item.slug)) {
    acc.push(item);
  }
  return acc;
}, []);
