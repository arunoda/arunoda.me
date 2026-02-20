import NextLink from 'next/link'
import * as gtag from '~/lib/gtag'

const Link = ({ href, ...rest }: any) => {
  function trackClick() {
    gtag.event({
      action: 'click_link',
      category: 'navigation',
      label: href
    });
  }

  if (href.startsWith('http')) {
    return (
      <a target='_blank' href={href} {...rest} onClick={trackClick} />
    )
  }

  return (
    <NextLink href={href} legacyBehavior>
      <a {...rest} onClick={trackClick} />
    </NextLink>
  )
}

export default Link
