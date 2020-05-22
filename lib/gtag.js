import { GA_TRACKING_ID } from '~/lib/constants'

export function isProduction() {
  return !(window.location.host.includes('localhost'))
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = ({url, title}) => {
  if (!isProduction()) {
    return
  }

  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
    page_title: title
  })
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }) => {
  if (!isProduction()) {
    return
  }

  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  })
}