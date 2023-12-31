/** @type {import('next').NextConfig} */

const withNextIntl = require('next-intl/plugin')(
    // This is the default (also the `src` folder is supported out of the box)
    './i18n.ts'
);


module.exports = withNextIntl({
    typescript:{
        ignoreBuildErrors:true
    },
    images: {
        domains: ['adminsafelife.pleskdemo.com', 'img.youtube.com', 'arsenalfire.az']
    }
})
