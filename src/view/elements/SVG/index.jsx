import React from 'react'
import * as SVGVariants from './SVGVariants'

export function SVG({variant, props}) {

    const getSvgVariant = variant => {
        const content = {
            'sign-in-google': SVGVariants.GoogleSVG,
            'sign-in-apple': SVGVariants.AppleSVG,
            'twitter-logo': SVGVariants.TwitterSVG,
            'default':  SVGVariants.DefaultSVG,
        }
        return content[variant] || content['default']
    }
    const SVGVariant = getSvgVariant(variant)
    return (
        <>
            <SVGVariant />
        </>
    )
}


