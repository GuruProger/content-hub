
import type { DefineComponent, SlotsType } from 'vue'
type IslandComponent<T extends DefineComponent> = T & DefineComponent<{}, {refresh: () => Promise<void>}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, SlotsType<{ fallback: { error: unknown } }>>
type HydrationStrategies = {
  hydrateOnVisible?: IntersectionObserverInit | true
  hydrateOnIdle?: number | true
  hydrateOnInteraction?: keyof HTMLElementEventMap | Array<keyof HTMLElementEventMap> | true
  hydrateOnMediaQuery?: string
  hydrateAfter?: number
  hydrateWhen?: boolean
  hydrateNever?: true
}
type LazyComponent<T> = (T & DefineComponent<HydrationStrategies, {}, {}, {}, {}, {}, {}, { hydrated: () => void }>)
interface _GlobalComponents {
      'NuxtWelcome': typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
    'NuxtLayout': typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
    'NuxtErrorBoundary': typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary")['default']
    'ClientOnly': typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
    'DevOnly': typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
    'ServerPlaceholder': typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
    'NuxtLink': typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
    'NuxtLoadingIndicator': typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
    'NuxtRouteAnnouncer': typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
    'NuxtImg': typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
    'NuxtPicture': typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
    'PrimeAutoComplete': typeof import("primevue/autocomplete")['default']
    'PrimeCalendar': typeof import("primevue/calendar")['default']
    'PrimeCascadeSelect': typeof import("primevue/cascadeselect")['default']
    'PrimeCheckbox': typeof import("primevue/checkbox")['default']
    'PrimeCheckboxGroup': typeof import("primevue/checkboxgroup")['default']
    'PrimeChips': typeof import("primevue/chips")['default']
    'PrimeColorPicker': typeof import("primevue/colorpicker")['default']
    'PrimeDatePicker': typeof import("primevue/datepicker")['default']
    'PrimeDropdown': typeof import("primevue/dropdown")['default']
    'PrimeFloatLabel': typeof import("primevue/floatlabel")['default']
    'PrimeFluid': typeof import("primevue/fluid")['default']
    'PrimeIconField': typeof import("primevue/iconfield")['default']
    'PrimeIftaLabel': typeof import("primevue/iftalabel")['default']
    'PrimeInputChips': typeof import("primevue/inputchips")['default']
    'PrimeInputGroup': typeof import("primevue/inputgroup")['default']
    'PrimeInputGroupAddon': typeof import("primevue/inputgroupaddon")['default']
    'PrimeInputIcon': typeof import("primevue/inputicon")['default']
    'PrimeInputMask': typeof import("primevue/inputmask")['default']
    'PrimeInputNumber': typeof import("primevue/inputnumber")['default']
    'PrimeInputOtp': typeof import("primevue/inputotp")['default']
    'PrimeInputSwitch': typeof import("primevue/inputswitch")['default']
    'PrimeInputText': typeof import("primevue/inputtext")['default']
    'PrimeKnob': typeof import("primevue/knob")['default']
    'PrimeListbox': typeof import("primevue/listbox")['default']
    'PrimeMultiSelect': typeof import("primevue/multiselect")['default']
    'PrimePassword': typeof import("primevue/password")['default']
    'PrimeRadioButton': typeof import("primevue/radiobutton")['default']
    'PrimeRadioButtonGroup': typeof import("primevue/radiobuttongroup")['default']
    'PrimeRating': typeof import("primevue/rating")['default']
    'PrimeSelect': typeof import("primevue/select")['default']
    'PrimeSelectButton': typeof import("primevue/selectbutton")['default']
    'PrimeSlider': typeof import("primevue/slider")['default']
    'PrimeTextarea': typeof import("primevue/textarea")['default']
    'PrimeToggleButton': typeof import("primevue/togglebutton")['default']
    'PrimeToggleSwitch': typeof import("primevue/toggleswitch")['default']
    'PrimeTreeSelect': typeof import("primevue/treeselect")['default']
    'PrimeButton': typeof import("primevue/button")['default']
    'PrimeButtonGroup': typeof import("primevue/buttongroup")['default']
    'PrimeSpeedDial': typeof import("primevue/speeddial")['default']
    'PrimeSplitButton': typeof import("primevue/splitbutton")['default']
    'PrimeColumn': typeof import("primevue/column")['default']
    'PrimeRow': typeof import("primevue/row")['default']
    'PrimeColumnGroup': typeof import("primevue/columngroup")['default']
    'PrimeDataTable': typeof import("primevue/datatable")['default']
    'PrimeDataView': typeof import("primevue/dataview")['default']
    'PrimeOrderList': typeof import("primevue/orderlist")['default']
    'PrimeOrganizationChart': typeof import("primevue/organizationchart")['default']
    'PrimePaginator': typeof import("primevue/paginator")['default']
    'PrimePickList': typeof import("primevue/picklist")['default']
    'PrimeTree': typeof import("primevue/tree")['default']
    'PrimeTreeTable': typeof import("primevue/treetable")['default']
    'PrimeTimeline': typeof import("primevue/timeline")['default']
    'PrimeVirtualScroller': typeof import("primevue/virtualscroller")['default']
    'PrimeAccordion': typeof import("primevue/accordion")['default']
    'PrimeAccordionPanel': typeof import("primevue/accordionpanel")['default']
    'PrimeAccordionHeader': typeof import("primevue/accordionheader")['default']
    'PrimeAccordionContent': typeof import("primevue/accordioncontent")['default']
    'PrimeAccordionTab': typeof import("primevue/accordiontab")['default']
    'PrimeCard': typeof import("primevue/card")['default']
    'PrimeDeferredContent': typeof import("primevue/deferredcontent")['default']
    'PrimeDivider': typeof import("primevue/divider")['default']
    'PrimeFieldset': typeof import("primevue/fieldset")['default']
    'PrimePanel': typeof import("primevue/panel")['default']
    'PrimeScrollPanel': typeof import("primevue/scrollpanel")['default']
    'PrimeSplitter': typeof import("primevue/splitter")['default']
    'PrimeSplitterPanel': typeof import("primevue/splitterpanel")['default']
    'PrimeStepper': typeof import("primevue/stepper")['default']
    'PrimeStepList': typeof import("primevue/steplist")['default']
    'PrimeStep': typeof import("primevue/step")['default']
    'PrimeStepItem': typeof import("primevue/stepitem")['default']
    'PrimeStepPanels': typeof import("primevue/steppanels")['default']
    'PrimeStepPanel': typeof import("primevue/steppanel")['default']
    'PrimeTabView': typeof import("primevue/tabview")['default']
    'PrimeTabs': typeof import("primevue/tabs")['default']
    'PrimeTabList': typeof import("primevue/tablist")['default']
    'PrimeTab': typeof import("primevue/tab")['default']
    'PrimeTabPanels': typeof import("primevue/tabpanels")['default']
    'PrimeTabPanel': typeof import("primevue/tabpanel")['default']
    'PrimeToolbar': typeof import("primevue/toolbar")['default']
    'PrimeConfirmDialog': typeof import("primevue/confirmdialog")['default']
    'PrimeConfirmPopup': typeof import("primevue/confirmpopup")['default']
    'PrimeDialog': typeof import("primevue/dialog")['default']
    'PrimeDrawer': typeof import("primevue/drawer")['default']
    'PrimeDynamicDialog': typeof import("primevue/dynamicdialog")['default']
    'PrimeOverlayPanel': typeof import("primevue/overlaypanel")['default']
    'PrimePopover': typeof import("primevue/popover")['default']
    'PrimeSidebar': typeof import("primevue/sidebar")['default']
    'PrimeFileUpload': typeof import("primevue/fileupload")['default']
    'PrimeBreadcrumb': typeof import("primevue/breadcrumb")['default']
    'PrimeContextMenu': typeof import("primevue/contextmenu")['default']
    'PrimeDock': typeof import("primevue/dock")['default']
    'PrimeMenu': typeof import("primevue/menu")['default']
    'PrimeMenubar': typeof import("primevue/menubar")['default']
    'PrimeMegaMenu': typeof import("primevue/megamenu")['default']
    'PrimePanelMenu': typeof import("primevue/panelmenu")['default']
    'PrimeSteps': typeof import("primevue/steps")['default']
    'PrimeTabMenu': typeof import("primevue/tabmenu")['default']
    'PrimeTieredMenu': typeof import("primevue/tieredmenu")['default']
    'PrimeMessage': typeof import("primevue/message")['default']
    'PrimeInlineMessage': typeof import("primevue/inlinemessage")['default']
    'PrimeToast': typeof import("primevue/toast")['default']
    'PrimeCarousel': typeof import("primevue/carousel")['default']
    'PrimeGalleria': typeof import("primevue/galleria")['default']
    'PrimeImage': typeof import("primevue/image")['default']
    'PrimeImageCompare': typeof import("primevue/imagecompare")['default']
    'PrimeAvatar': typeof import("primevue/avatar")['default']
    'PrimeAvatarGroup': typeof import("primevue/avatargroup")['default']
    'PrimeBadge': typeof import("primevue/badge")['default']
    'PrimeBlockUI': typeof import("primevue/blockui")['default']
    'PrimeChip': typeof import("primevue/chip")['default']
    'PrimeInplace': typeof import("primevue/inplace")['default']
    'PrimeMeterGroup': typeof import("primevue/metergroup")['default']
    'PrimeOverlayBadge': typeof import("primevue/overlaybadge")['default']
    'PrimeScrollTop': typeof import("primevue/scrolltop")['default']
    'PrimeSkeleton': typeof import("primevue/skeleton")['default']
    'PrimeProgressBar': typeof import("primevue/progressbar")['default']
    'PrimeProgressSpinner': typeof import("primevue/progressspinner")['default']
    'PrimeTag': typeof import("primevue/tag")['default']
    'PrimeTerminal': typeof import("primevue/terminal")['default']
    'NuxtPage': typeof import("../node_modules/nuxt/dist/pages/runtime/page-placeholder")['default']
    'NoScript': typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
    'Link': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
    'Base': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
    'Title': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
    'Meta': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
    'Style': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
    'Head': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
    'Html': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
    'Body': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
    'NuxtIsland': typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
    'NuxtRouteAnnouncer': IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
      'LazyNuxtWelcome': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
    'LazyNuxtLayout': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
    'LazyNuxtErrorBoundary': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary")['default']>
    'LazyClientOnly': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']>
    'LazyDevOnly': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']>
    'LazyServerPlaceholder': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
    'LazyNuxtLink': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
    'LazyNuxtLoadingIndicator': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
    'LazyNuxtRouteAnnouncer': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
    'LazyNuxtImg': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']>
    'LazyNuxtPicture': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']>
    'LazyPrimeAutoComplete': LazyComponent<typeof import("primevue/autocomplete")['default']>
    'LazyPrimeCalendar': LazyComponent<typeof import("primevue/calendar")['default']>
    'LazyPrimeCascadeSelect': LazyComponent<typeof import("primevue/cascadeselect")['default']>
    'LazyPrimeCheckbox': LazyComponent<typeof import("primevue/checkbox")['default']>
    'LazyPrimeCheckboxGroup': LazyComponent<typeof import("primevue/checkboxgroup")['default']>
    'LazyPrimeChips': LazyComponent<typeof import("primevue/chips")['default']>
    'LazyPrimeColorPicker': LazyComponent<typeof import("primevue/colorpicker")['default']>
    'LazyPrimeDatePicker': LazyComponent<typeof import("primevue/datepicker")['default']>
    'LazyPrimeDropdown': LazyComponent<typeof import("primevue/dropdown")['default']>
    'LazyPrimeFloatLabel': LazyComponent<typeof import("primevue/floatlabel")['default']>
    'LazyPrimeFluid': LazyComponent<typeof import("primevue/fluid")['default']>
    'LazyPrimeIconField': LazyComponent<typeof import("primevue/iconfield")['default']>
    'LazyPrimeIftaLabel': LazyComponent<typeof import("primevue/iftalabel")['default']>
    'LazyPrimeInputChips': LazyComponent<typeof import("primevue/inputchips")['default']>
    'LazyPrimeInputGroup': LazyComponent<typeof import("primevue/inputgroup")['default']>
    'LazyPrimeInputGroupAddon': LazyComponent<typeof import("primevue/inputgroupaddon")['default']>
    'LazyPrimeInputIcon': LazyComponent<typeof import("primevue/inputicon")['default']>
    'LazyPrimeInputMask': LazyComponent<typeof import("primevue/inputmask")['default']>
    'LazyPrimeInputNumber': LazyComponent<typeof import("primevue/inputnumber")['default']>
    'LazyPrimeInputOtp': LazyComponent<typeof import("primevue/inputotp")['default']>
    'LazyPrimeInputSwitch': LazyComponent<typeof import("primevue/inputswitch")['default']>
    'LazyPrimeInputText': LazyComponent<typeof import("primevue/inputtext")['default']>
    'LazyPrimeKnob': LazyComponent<typeof import("primevue/knob")['default']>
    'LazyPrimeListbox': LazyComponent<typeof import("primevue/listbox")['default']>
    'LazyPrimeMultiSelect': LazyComponent<typeof import("primevue/multiselect")['default']>
    'LazyPrimePassword': LazyComponent<typeof import("primevue/password")['default']>
    'LazyPrimeRadioButton': LazyComponent<typeof import("primevue/radiobutton")['default']>
    'LazyPrimeRadioButtonGroup': LazyComponent<typeof import("primevue/radiobuttongroup")['default']>
    'LazyPrimeRating': LazyComponent<typeof import("primevue/rating")['default']>
    'LazyPrimeSelect': LazyComponent<typeof import("primevue/select")['default']>
    'LazyPrimeSelectButton': LazyComponent<typeof import("primevue/selectbutton")['default']>
    'LazyPrimeSlider': LazyComponent<typeof import("primevue/slider")['default']>
    'LazyPrimeTextarea': LazyComponent<typeof import("primevue/textarea")['default']>
    'LazyPrimeToggleButton': LazyComponent<typeof import("primevue/togglebutton")['default']>
    'LazyPrimeToggleSwitch': LazyComponent<typeof import("primevue/toggleswitch")['default']>
    'LazyPrimeTreeSelect': LazyComponent<typeof import("primevue/treeselect")['default']>
    'LazyPrimeButton': LazyComponent<typeof import("primevue/button")['default']>
    'LazyPrimeButtonGroup': LazyComponent<typeof import("primevue/buttongroup")['default']>
    'LazyPrimeSpeedDial': LazyComponent<typeof import("primevue/speeddial")['default']>
    'LazyPrimeSplitButton': LazyComponent<typeof import("primevue/splitbutton")['default']>
    'LazyPrimeColumn': LazyComponent<typeof import("primevue/column")['default']>
    'LazyPrimeRow': LazyComponent<typeof import("primevue/row")['default']>
    'LazyPrimeColumnGroup': LazyComponent<typeof import("primevue/columngroup")['default']>
    'LazyPrimeDataTable': LazyComponent<typeof import("primevue/datatable")['default']>
    'LazyPrimeDataView': LazyComponent<typeof import("primevue/dataview")['default']>
    'LazyPrimeOrderList': LazyComponent<typeof import("primevue/orderlist")['default']>
    'LazyPrimeOrganizationChart': LazyComponent<typeof import("primevue/organizationchart")['default']>
    'LazyPrimePaginator': LazyComponent<typeof import("primevue/paginator")['default']>
    'LazyPrimePickList': LazyComponent<typeof import("primevue/picklist")['default']>
    'LazyPrimeTree': LazyComponent<typeof import("primevue/tree")['default']>
    'LazyPrimeTreeTable': LazyComponent<typeof import("primevue/treetable")['default']>
    'LazyPrimeTimeline': LazyComponent<typeof import("primevue/timeline")['default']>
    'LazyPrimeVirtualScroller': LazyComponent<typeof import("primevue/virtualscroller")['default']>
    'LazyPrimeAccordion': LazyComponent<typeof import("primevue/accordion")['default']>
    'LazyPrimeAccordionPanel': LazyComponent<typeof import("primevue/accordionpanel")['default']>
    'LazyPrimeAccordionHeader': LazyComponent<typeof import("primevue/accordionheader")['default']>
    'LazyPrimeAccordionContent': LazyComponent<typeof import("primevue/accordioncontent")['default']>
    'LazyPrimeAccordionTab': LazyComponent<typeof import("primevue/accordiontab")['default']>
    'LazyPrimeCard': LazyComponent<typeof import("primevue/card")['default']>
    'LazyPrimeDeferredContent': LazyComponent<typeof import("primevue/deferredcontent")['default']>
    'LazyPrimeDivider': LazyComponent<typeof import("primevue/divider")['default']>
    'LazyPrimeFieldset': LazyComponent<typeof import("primevue/fieldset")['default']>
    'LazyPrimePanel': LazyComponent<typeof import("primevue/panel")['default']>
    'LazyPrimeScrollPanel': LazyComponent<typeof import("primevue/scrollpanel")['default']>
    'LazyPrimeSplitter': LazyComponent<typeof import("primevue/splitter")['default']>
    'LazyPrimeSplitterPanel': LazyComponent<typeof import("primevue/splitterpanel")['default']>
    'LazyPrimeStepper': LazyComponent<typeof import("primevue/stepper")['default']>
    'LazyPrimeStepList': LazyComponent<typeof import("primevue/steplist")['default']>
    'LazyPrimeStep': LazyComponent<typeof import("primevue/step")['default']>
    'LazyPrimeStepItem': LazyComponent<typeof import("primevue/stepitem")['default']>
    'LazyPrimeStepPanels': LazyComponent<typeof import("primevue/steppanels")['default']>
    'LazyPrimeStepPanel': LazyComponent<typeof import("primevue/steppanel")['default']>
    'LazyPrimeTabView': LazyComponent<typeof import("primevue/tabview")['default']>
    'LazyPrimeTabs': LazyComponent<typeof import("primevue/tabs")['default']>
    'LazyPrimeTabList': LazyComponent<typeof import("primevue/tablist")['default']>
    'LazyPrimeTab': LazyComponent<typeof import("primevue/tab")['default']>
    'LazyPrimeTabPanels': LazyComponent<typeof import("primevue/tabpanels")['default']>
    'LazyPrimeTabPanel': LazyComponent<typeof import("primevue/tabpanel")['default']>
    'LazyPrimeToolbar': LazyComponent<typeof import("primevue/toolbar")['default']>
    'LazyPrimeConfirmDialog': LazyComponent<typeof import("primevue/confirmdialog")['default']>
    'LazyPrimeConfirmPopup': LazyComponent<typeof import("primevue/confirmpopup")['default']>
    'LazyPrimeDialog': LazyComponent<typeof import("primevue/dialog")['default']>
    'LazyPrimeDrawer': LazyComponent<typeof import("primevue/drawer")['default']>
    'LazyPrimeDynamicDialog': LazyComponent<typeof import("primevue/dynamicdialog")['default']>
    'LazyPrimeOverlayPanel': LazyComponent<typeof import("primevue/overlaypanel")['default']>
    'LazyPrimePopover': LazyComponent<typeof import("primevue/popover")['default']>
    'LazyPrimeSidebar': LazyComponent<typeof import("primevue/sidebar")['default']>
    'LazyPrimeFileUpload': LazyComponent<typeof import("primevue/fileupload")['default']>
    'LazyPrimeBreadcrumb': LazyComponent<typeof import("primevue/breadcrumb")['default']>
    'LazyPrimeContextMenu': LazyComponent<typeof import("primevue/contextmenu")['default']>
    'LazyPrimeDock': LazyComponent<typeof import("primevue/dock")['default']>
    'LazyPrimeMenu': LazyComponent<typeof import("primevue/menu")['default']>
    'LazyPrimeMenubar': LazyComponent<typeof import("primevue/menubar")['default']>
    'LazyPrimeMegaMenu': LazyComponent<typeof import("primevue/megamenu")['default']>
    'LazyPrimePanelMenu': LazyComponent<typeof import("primevue/panelmenu")['default']>
    'LazyPrimeSteps': LazyComponent<typeof import("primevue/steps")['default']>
    'LazyPrimeTabMenu': LazyComponent<typeof import("primevue/tabmenu")['default']>
    'LazyPrimeTieredMenu': LazyComponent<typeof import("primevue/tieredmenu")['default']>
    'LazyPrimeMessage': LazyComponent<typeof import("primevue/message")['default']>
    'LazyPrimeInlineMessage': LazyComponent<typeof import("primevue/inlinemessage")['default']>
    'LazyPrimeToast': LazyComponent<typeof import("primevue/toast")['default']>
    'LazyPrimeCarousel': LazyComponent<typeof import("primevue/carousel")['default']>
    'LazyPrimeGalleria': LazyComponent<typeof import("primevue/galleria")['default']>
    'LazyPrimeImage': LazyComponent<typeof import("primevue/image")['default']>
    'LazyPrimeImageCompare': LazyComponent<typeof import("primevue/imagecompare")['default']>
    'LazyPrimeAvatar': LazyComponent<typeof import("primevue/avatar")['default']>
    'LazyPrimeAvatarGroup': LazyComponent<typeof import("primevue/avatargroup")['default']>
    'LazyPrimeBadge': LazyComponent<typeof import("primevue/badge")['default']>
    'LazyPrimeBlockUI': LazyComponent<typeof import("primevue/blockui")['default']>
    'LazyPrimeChip': LazyComponent<typeof import("primevue/chip")['default']>
    'LazyPrimeInplace': LazyComponent<typeof import("primevue/inplace")['default']>
    'LazyPrimeMeterGroup': LazyComponent<typeof import("primevue/metergroup")['default']>
    'LazyPrimeOverlayBadge': LazyComponent<typeof import("primevue/overlaybadge")['default']>
    'LazyPrimeScrollTop': LazyComponent<typeof import("primevue/scrolltop")['default']>
    'LazyPrimeSkeleton': LazyComponent<typeof import("primevue/skeleton")['default']>
    'LazyPrimeProgressBar': LazyComponent<typeof import("primevue/progressbar")['default']>
    'LazyPrimeProgressSpinner': LazyComponent<typeof import("primevue/progressspinner")['default']>
    'LazyPrimeTag': LazyComponent<typeof import("primevue/tag")['default']>
    'LazyPrimeTerminal': LazyComponent<typeof import("primevue/terminal")['default']>
    'LazyNuxtPage': LazyComponent<typeof import("../node_modules/nuxt/dist/pages/runtime/page-placeholder")['default']>
    'LazyNoScript': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
    'LazyLink': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']>
    'LazyBase': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']>
    'LazyTitle': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']>
    'LazyMeta': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']>
    'LazyStyle': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']>
    'LazyHead': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']>
    'LazyHtml': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']>
    'LazyBody': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']>
    'LazyNuxtIsland': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']>
    'LazyNuxtRouteAnnouncer': LazyComponent<IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>>
}

declare module 'vue' {
  export interface GlobalComponents extends _GlobalComponents { }
}

export const NuxtWelcome: typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
export const NuxtLayout: typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
export const NuxtErrorBoundary: typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary")['default']
export const ClientOnly: typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
export const DevOnly: typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
export const ServerPlaceholder: typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
export const NuxtLink: typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
export const NuxtLoadingIndicator: typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
export const NuxtRouteAnnouncer: typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
export const NuxtImg: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
export const NuxtPicture: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
export const PrimeAutoComplete: typeof import("primevue/autocomplete")['default']
export const PrimeCalendar: typeof import("primevue/calendar")['default']
export const PrimeCascadeSelect: typeof import("primevue/cascadeselect")['default']
export const PrimeCheckbox: typeof import("primevue/checkbox")['default']
export const PrimeCheckboxGroup: typeof import("primevue/checkboxgroup")['default']
export const PrimeChips: typeof import("primevue/chips")['default']
export const PrimeColorPicker: typeof import("primevue/colorpicker")['default']
export const PrimeDatePicker: typeof import("primevue/datepicker")['default']
export const PrimeDropdown: typeof import("primevue/dropdown")['default']
export const PrimeFloatLabel: typeof import("primevue/floatlabel")['default']
export const PrimeFluid: typeof import("primevue/fluid")['default']
export const PrimeIconField: typeof import("primevue/iconfield")['default']
export const PrimeIftaLabel: typeof import("primevue/iftalabel")['default']
export const PrimeInputChips: typeof import("primevue/inputchips")['default']
export const PrimeInputGroup: typeof import("primevue/inputgroup")['default']
export const PrimeInputGroupAddon: typeof import("primevue/inputgroupaddon")['default']
export const PrimeInputIcon: typeof import("primevue/inputicon")['default']
export const PrimeInputMask: typeof import("primevue/inputmask")['default']
export const PrimeInputNumber: typeof import("primevue/inputnumber")['default']
export const PrimeInputOtp: typeof import("primevue/inputotp")['default']
export const PrimeInputSwitch: typeof import("primevue/inputswitch")['default']
export const PrimeInputText: typeof import("primevue/inputtext")['default']
export const PrimeKnob: typeof import("primevue/knob")['default']
export const PrimeListbox: typeof import("primevue/listbox")['default']
export const PrimeMultiSelect: typeof import("primevue/multiselect")['default']
export const PrimePassword: typeof import("primevue/password")['default']
export const PrimeRadioButton: typeof import("primevue/radiobutton")['default']
export const PrimeRadioButtonGroup: typeof import("primevue/radiobuttongroup")['default']
export const PrimeRating: typeof import("primevue/rating")['default']
export const PrimeSelect: typeof import("primevue/select")['default']
export const PrimeSelectButton: typeof import("primevue/selectbutton")['default']
export const PrimeSlider: typeof import("primevue/slider")['default']
export const PrimeTextarea: typeof import("primevue/textarea")['default']
export const PrimeToggleButton: typeof import("primevue/togglebutton")['default']
export const PrimeToggleSwitch: typeof import("primevue/toggleswitch")['default']
export const PrimeTreeSelect: typeof import("primevue/treeselect")['default']
export const PrimeButton: typeof import("primevue/button")['default']
export const PrimeButtonGroup: typeof import("primevue/buttongroup")['default']
export const PrimeSpeedDial: typeof import("primevue/speeddial")['default']
export const PrimeSplitButton: typeof import("primevue/splitbutton")['default']
export const PrimeColumn: typeof import("primevue/column")['default']
export const PrimeRow: typeof import("primevue/row")['default']
export const PrimeColumnGroup: typeof import("primevue/columngroup")['default']
export const PrimeDataTable: typeof import("primevue/datatable")['default']
export const PrimeDataView: typeof import("primevue/dataview")['default']
export const PrimeOrderList: typeof import("primevue/orderlist")['default']
export const PrimeOrganizationChart: typeof import("primevue/organizationchart")['default']
export const PrimePaginator: typeof import("primevue/paginator")['default']
export const PrimePickList: typeof import("primevue/picklist")['default']
export const PrimeTree: typeof import("primevue/tree")['default']
export const PrimeTreeTable: typeof import("primevue/treetable")['default']
export const PrimeTimeline: typeof import("primevue/timeline")['default']
export const PrimeVirtualScroller: typeof import("primevue/virtualscroller")['default']
export const PrimeAccordion: typeof import("primevue/accordion")['default']
export const PrimeAccordionPanel: typeof import("primevue/accordionpanel")['default']
export const PrimeAccordionHeader: typeof import("primevue/accordionheader")['default']
export const PrimeAccordionContent: typeof import("primevue/accordioncontent")['default']
export const PrimeAccordionTab: typeof import("primevue/accordiontab")['default']
export const PrimeCard: typeof import("primevue/card")['default']
export const PrimeDeferredContent: typeof import("primevue/deferredcontent")['default']
export const PrimeDivider: typeof import("primevue/divider")['default']
export const PrimeFieldset: typeof import("primevue/fieldset")['default']
export const PrimePanel: typeof import("primevue/panel")['default']
export const PrimeScrollPanel: typeof import("primevue/scrollpanel")['default']
export const PrimeSplitter: typeof import("primevue/splitter")['default']
export const PrimeSplitterPanel: typeof import("primevue/splitterpanel")['default']
export const PrimeStepper: typeof import("primevue/stepper")['default']
export const PrimeStepList: typeof import("primevue/steplist")['default']
export const PrimeStep: typeof import("primevue/step")['default']
export const PrimeStepItem: typeof import("primevue/stepitem")['default']
export const PrimeStepPanels: typeof import("primevue/steppanels")['default']
export const PrimeStepPanel: typeof import("primevue/steppanel")['default']
export const PrimeTabView: typeof import("primevue/tabview")['default']
export const PrimeTabs: typeof import("primevue/tabs")['default']
export const PrimeTabList: typeof import("primevue/tablist")['default']
export const PrimeTab: typeof import("primevue/tab")['default']
export const PrimeTabPanels: typeof import("primevue/tabpanels")['default']
export const PrimeTabPanel: typeof import("primevue/tabpanel")['default']
export const PrimeToolbar: typeof import("primevue/toolbar")['default']
export const PrimeConfirmDialog: typeof import("primevue/confirmdialog")['default']
export const PrimeConfirmPopup: typeof import("primevue/confirmpopup")['default']
export const PrimeDialog: typeof import("primevue/dialog")['default']
export const PrimeDrawer: typeof import("primevue/drawer")['default']
export const PrimeDynamicDialog: typeof import("primevue/dynamicdialog")['default']
export const PrimeOverlayPanel: typeof import("primevue/overlaypanel")['default']
export const PrimePopover: typeof import("primevue/popover")['default']
export const PrimeSidebar: typeof import("primevue/sidebar")['default']
export const PrimeFileUpload: typeof import("primevue/fileupload")['default']
export const PrimeBreadcrumb: typeof import("primevue/breadcrumb")['default']
export const PrimeContextMenu: typeof import("primevue/contextmenu")['default']
export const PrimeDock: typeof import("primevue/dock")['default']
export const PrimeMenu: typeof import("primevue/menu")['default']
export const PrimeMenubar: typeof import("primevue/menubar")['default']
export const PrimeMegaMenu: typeof import("primevue/megamenu")['default']
export const PrimePanelMenu: typeof import("primevue/panelmenu")['default']
export const PrimeSteps: typeof import("primevue/steps")['default']
export const PrimeTabMenu: typeof import("primevue/tabmenu")['default']
export const PrimeTieredMenu: typeof import("primevue/tieredmenu")['default']
export const PrimeMessage: typeof import("primevue/message")['default']
export const PrimeInlineMessage: typeof import("primevue/inlinemessage")['default']
export const PrimeToast: typeof import("primevue/toast")['default']
export const PrimeCarousel: typeof import("primevue/carousel")['default']
export const PrimeGalleria: typeof import("primevue/galleria")['default']
export const PrimeImage: typeof import("primevue/image")['default']
export const PrimeImageCompare: typeof import("primevue/imagecompare")['default']
export const PrimeAvatar: typeof import("primevue/avatar")['default']
export const PrimeAvatarGroup: typeof import("primevue/avatargroup")['default']
export const PrimeBadge: typeof import("primevue/badge")['default']
export const PrimeBlockUI: typeof import("primevue/blockui")['default']
export const PrimeChip: typeof import("primevue/chip")['default']
export const PrimeInplace: typeof import("primevue/inplace")['default']
export const PrimeMeterGroup: typeof import("primevue/metergroup")['default']
export const PrimeOverlayBadge: typeof import("primevue/overlaybadge")['default']
export const PrimeScrollTop: typeof import("primevue/scrolltop")['default']
export const PrimeSkeleton: typeof import("primevue/skeleton")['default']
export const PrimeProgressBar: typeof import("primevue/progressbar")['default']
export const PrimeProgressSpinner: typeof import("primevue/progressspinner")['default']
export const PrimeTag: typeof import("primevue/tag")['default']
export const PrimeTerminal: typeof import("primevue/terminal")['default']
export const NuxtPage: typeof import("../node_modules/nuxt/dist/pages/runtime/page-placeholder")['default']
export const NoScript: typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
export const Link: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
export const Base: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
export const Title: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
export const Meta: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
export const Style: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
export const Head: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
export const Html: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
export const Body: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
export const NuxtIsland: typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
export const NuxtRouteAnnouncer: IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
export const LazyNuxtWelcome: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
export const LazyNuxtLayout: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
export const LazyNuxtErrorBoundary: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary")['default']>
export const LazyClientOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']>
export const LazyDevOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']>
export const LazyServerPlaceholder: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
export const LazyNuxtLink: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
export const LazyNuxtLoadingIndicator: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
export const LazyNuxtImg: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']>
export const LazyNuxtPicture: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']>
export const LazyPrimeAutoComplete: LazyComponent<typeof import("primevue/autocomplete")['default']>
export const LazyPrimeCalendar: LazyComponent<typeof import("primevue/calendar")['default']>
export const LazyPrimeCascadeSelect: LazyComponent<typeof import("primevue/cascadeselect")['default']>
export const LazyPrimeCheckbox: LazyComponent<typeof import("primevue/checkbox")['default']>
export const LazyPrimeCheckboxGroup: LazyComponent<typeof import("primevue/checkboxgroup")['default']>
export const LazyPrimeChips: LazyComponent<typeof import("primevue/chips")['default']>
export const LazyPrimeColorPicker: LazyComponent<typeof import("primevue/colorpicker")['default']>
export const LazyPrimeDatePicker: LazyComponent<typeof import("primevue/datepicker")['default']>
export const LazyPrimeDropdown: LazyComponent<typeof import("primevue/dropdown")['default']>
export const LazyPrimeFloatLabel: LazyComponent<typeof import("primevue/floatlabel")['default']>
export const LazyPrimeFluid: LazyComponent<typeof import("primevue/fluid")['default']>
export const LazyPrimeIconField: LazyComponent<typeof import("primevue/iconfield")['default']>
export const LazyPrimeIftaLabel: LazyComponent<typeof import("primevue/iftalabel")['default']>
export const LazyPrimeInputChips: LazyComponent<typeof import("primevue/inputchips")['default']>
export const LazyPrimeInputGroup: LazyComponent<typeof import("primevue/inputgroup")['default']>
export const LazyPrimeInputGroupAddon: LazyComponent<typeof import("primevue/inputgroupaddon")['default']>
export const LazyPrimeInputIcon: LazyComponent<typeof import("primevue/inputicon")['default']>
export const LazyPrimeInputMask: LazyComponent<typeof import("primevue/inputmask")['default']>
export const LazyPrimeInputNumber: LazyComponent<typeof import("primevue/inputnumber")['default']>
export const LazyPrimeInputOtp: LazyComponent<typeof import("primevue/inputotp")['default']>
export const LazyPrimeInputSwitch: LazyComponent<typeof import("primevue/inputswitch")['default']>
export const LazyPrimeInputText: LazyComponent<typeof import("primevue/inputtext")['default']>
export const LazyPrimeKnob: LazyComponent<typeof import("primevue/knob")['default']>
export const LazyPrimeListbox: LazyComponent<typeof import("primevue/listbox")['default']>
export const LazyPrimeMultiSelect: LazyComponent<typeof import("primevue/multiselect")['default']>
export const LazyPrimePassword: LazyComponent<typeof import("primevue/password")['default']>
export const LazyPrimeRadioButton: LazyComponent<typeof import("primevue/radiobutton")['default']>
export const LazyPrimeRadioButtonGroup: LazyComponent<typeof import("primevue/radiobuttongroup")['default']>
export const LazyPrimeRating: LazyComponent<typeof import("primevue/rating")['default']>
export const LazyPrimeSelect: LazyComponent<typeof import("primevue/select")['default']>
export const LazyPrimeSelectButton: LazyComponent<typeof import("primevue/selectbutton")['default']>
export const LazyPrimeSlider: LazyComponent<typeof import("primevue/slider")['default']>
export const LazyPrimeTextarea: LazyComponent<typeof import("primevue/textarea")['default']>
export const LazyPrimeToggleButton: LazyComponent<typeof import("primevue/togglebutton")['default']>
export const LazyPrimeToggleSwitch: LazyComponent<typeof import("primevue/toggleswitch")['default']>
export const LazyPrimeTreeSelect: LazyComponent<typeof import("primevue/treeselect")['default']>
export const LazyPrimeButton: LazyComponent<typeof import("primevue/button")['default']>
export const LazyPrimeButtonGroup: LazyComponent<typeof import("primevue/buttongroup")['default']>
export const LazyPrimeSpeedDial: LazyComponent<typeof import("primevue/speeddial")['default']>
export const LazyPrimeSplitButton: LazyComponent<typeof import("primevue/splitbutton")['default']>
export const LazyPrimeColumn: LazyComponent<typeof import("primevue/column")['default']>
export const LazyPrimeRow: LazyComponent<typeof import("primevue/row")['default']>
export const LazyPrimeColumnGroup: LazyComponent<typeof import("primevue/columngroup")['default']>
export const LazyPrimeDataTable: LazyComponent<typeof import("primevue/datatable")['default']>
export const LazyPrimeDataView: LazyComponent<typeof import("primevue/dataview")['default']>
export const LazyPrimeOrderList: LazyComponent<typeof import("primevue/orderlist")['default']>
export const LazyPrimeOrganizationChart: LazyComponent<typeof import("primevue/organizationchart")['default']>
export const LazyPrimePaginator: LazyComponent<typeof import("primevue/paginator")['default']>
export const LazyPrimePickList: LazyComponent<typeof import("primevue/picklist")['default']>
export const LazyPrimeTree: LazyComponent<typeof import("primevue/tree")['default']>
export const LazyPrimeTreeTable: LazyComponent<typeof import("primevue/treetable")['default']>
export const LazyPrimeTimeline: LazyComponent<typeof import("primevue/timeline")['default']>
export const LazyPrimeVirtualScroller: LazyComponent<typeof import("primevue/virtualscroller")['default']>
export const LazyPrimeAccordion: LazyComponent<typeof import("primevue/accordion")['default']>
export const LazyPrimeAccordionPanel: LazyComponent<typeof import("primevue/accordionpanel")['default']>
export const LazyPrimeAccordionHeader: LazyComponent<typeof import("primevue/accordionheader")['default']>
export const LazyPrimeAccordionContent: LazyComponent<typeof import("primevue/accordioncontent")['default']>
export const LazyPrimeAccordionTab: LazyComponent<typeof import("primevue/accordiontab")['default']>
export const LazyPrimeCard: LazyComponent<typeof import("primevue/card")['default']>
export const LazyPrimeDeferredContent: LazyComponent<typeof import("primevue/deferredcontent")['default']>
export const LazyPrimeDivider: LazyComponent<typeof import("primevue/divider")['default']>
export const LazyPrimeFieldset: LazyComponent<typeof import("primevue/fieldset")['default']>
export const LazyPrimePanel: LazyComponent<typeof import("primevue/panel")['default']>
export const LazyPrimeScrollPanel: LazyComponent<typeof import("primevue/scrollpanel")['default']>
export const LazyPrimeSplitter: LazyComponent<typeof import("primevue/splitter")['default']>
export const LazyPrimeSplitterPanel: LazyComponent<typeof import("primevue/splitterpanel")['default']>
export const LazyPrimeStepper: LazyComponent<typeof import("primevue/stepper")['default']>
export const LazyPrimeStepList: LazyComponent<typeof import("primevue/steplist")['default']>
export const LazyPrimeStep: LazyComponent<typeof import("primevue/step")['default']>
export const LazyPrimeStepItem: LazyComponent<typeof import("primevue/stepitem")['default']>
export const LazyPrimeStepPanels: LazyComponent<typeof import("primevue/steppanels")['default']>
export const LazyPrimeStepPanel: LazyComponent<typeof import("primevue/steppanel")['default']>
export const LazyPrimeTabView: LazyComponent<typeof import("primevue/tabview")['default']>
export const LazyPrimeTabs: LazyComponent<typeof import("primevue/tabs")['default']>
export const LazyPrimeTabList: LazyComponent<typeof import("primevue/tablist")['default']>
export const LazyPrimeTab: LazyComponent<typeof import("primevue/tab")['default']>
export const LazyPrimeTabPanels: LazyComponent<typeof import("primevue/tabpanels")['default']>
export const LazyPrimeTabPanel: LazyComponent<typeof import("primevue/tabpanel")['default']>
export const LazyPrimeToolbar: LazyComponent<typeof import("primevue/toolbar")['default']>
export const LazyPrimeConfirmDialog: LazyComponent<typeof import("primevue/confirmdialog")['default']>
export const LazyPrimeConfirmPopup: LazyComponent<typeof import("primevue/confirmpopup")['default']>
export const LazyPrimeDialog: LazyComponent<typeof import("primevue/dialog")['default']>
export const LazyPrimeDrawer: LazyComponent<typeof import("primevue/drawer")['default']>
export const LazyPrimeDynamicDialog: LazyComponent<typeof import("primevue/dynamicdialog")['default']>
export const LazyPrimeOverlayPanel: LazyComponent<typeof import("primevue/overlaypanel")['default']>
export const LazyPrimePopover: LazyComponent<typeof import("primevue/popover")['default']>
export const LazyPrimeSidebar: LazyComponent<typeof import("primevue/sidebar")['default']>
export const LazyPrimeFileUpload: LazyComponent<typeof import("primevue/fileupload")['default']>
export const LazyPrimeBreadcrumb: LazyComponent<typeof import("primevue/breadcrumb")['default']>
export const LazyPrimeContextMenu: LazyComponent<typeof import("primevue/contextmenu")['default']>
export const LazyPrimeDock: LazyComponent<typeof import("primevue/dock")['default']>
export const LazyPrimeMenu: LazyComponent<typeof import("primevue/menu")['default']>
export const LazyPrimeMenubar: LazyComponent<typeof import("primevue/menubar")['default']>
export const LazyPrimeMegaMenu: LazyComponent<typeof import("primevue/megamenu")['default']>
export const LazyPrimePanelMenu: LazyComponent<typeof import("primevue/panelmenu")['default']>
export const LazyPrimeSteps: LazyComponent<typeof import("primevue/steps")['default']>
export const LazyPrimeTabMenu: LazyComponent<typeof import("primevue/tabmenu")['default']>
export const LazyPrimeTieredMenu: LazyComponent<typeof import("primevue/tieredmenu")['default']>
export const LazyPrimeMessage: LazyComponent<typeof import("primevue/message")['default']>
export const LazyPrimeInlineMessage: LazyComponent<typeof import("primevue/inlinemessage")['default']>
export const LazyPrimeToast: LazyComponent<typeof import("primevue/toast")['default']>
export const LazyPrimeCarousel: LazyComponent<typeof import("primevue/carousel")['default']>
export const LazyPrimeGalleria: LazyComponent<typeof import("primevue/galleria")['default']>
export const LazyPrimeImage: LazyComponent<typeof import("primevue/image")['default']>
export const LazyPrimeImageCompare: LazyComponent<typeof import("primevue/imagecompare")['default']>
export const LazyPrimeAvatar: LazyComponent<typeof import("primevue/avatar")['default']>
export const LazyPrimeAvatarGroup: LazyComponent<typeof import("primevue/avatargroup")['default']>
export const LazyPrimeBadge: LazyComponent<typeof import("primevue/badge")['default']>
export const LazyPrimeBlockUI: LazyComponent<typeof import("primevue/blockui")['default']>
export const LazyPrimeChip: LazyComponent<typeof import("primevue/chip")['default']>
export const LazyPrimeInplace: LazyComponent<typeof import("primevue/inplace")['default']>
export const LazyPrimeMeterGroup: LazyComponent<typeof import("primevue/metergroup")['default']>
export const LazyPrimeOverlayBadge: LazyComponent<typeof import("primevue/overlaybadge")['default']>
export const LazyPrimeScrollTop: LazyComponent<typeof import("primevue/scrolltop")['default']>
export const LazyPrimeSkeleton: LazyComponent<typeof import("primevue/skeleton")['default']>
export const LazyPrimeProgressBar: LazyComponent<typeof import("primevue/progressbar")['default']>
export const LazyPrimeProgressSpinner: LazyComponent<typeof import("primevue/progressspinner")['default']>
export const LazyPrimeTag: LazyComponent<typeof import("primevue/tag")['default']>
export const LazyPrimeTerminal: LazyComponent<typeof import("primevue/terminal")['default']>
export const LazyNuxtPage: LazyComponent<typeof import("../node_modules/nuxt/dist/pages/runtime/page-placeholder")['default']>
export const LazyNoScript: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
export const LazyLink: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']>
export const LazyBase: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']>
export const LazyTitle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']>
export const LazyMeta: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']>
export const LazyStyle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']>
export const LazyHead: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']>
export const LazyHtml: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']>
export const LazyBody: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']>
export const LazyNuxtIsland: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>>

export const componentNames: string[]
