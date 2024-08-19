const withNextra = require('nextra')({
    theme: 'nextra-theme-docs',
    themeConfig: './theme.config.jsx',
    latex: true
})

module.exports = withNextra()

// If you have other Next.js configurations, you can pass them as the parameter:
// module.exports = withNextra({ /* other next.js config */ })


const path = require('path');

module.exports = withNextra({
    webpack: (config) => {
        // Webpack 절대 경로 별칭 설정
        config.resolve.alias['@components'] = path.join(__dirname, 'components');

        // SVG를 React 컴포넌트로 불러오는 설정
        config.module.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack']
        });

        return config;
    },
});