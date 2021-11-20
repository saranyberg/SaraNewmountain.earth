module.exports = {
    swcMinify: true,
    // Support MDX files as pages:
    pageExtensions: ['mdx', 'tsx', 'ts', 'jsx', 'js'],
    // Prefer loading of ES Modules over CommonJS
    experimental: { esmExternals: true },
    // Support loading `.md`, `.mdx`:
    webpack(config, options) {
        config.module.rules.push({
            test: /\.mdx?$/,
            use: [
                // The default `babel-loader` used by Next:
                options.defaultLoaders.babel,
                {
                    loader: '@mdx-js/loader',
                    /** @type {import('@mdx-js/loader').Options} */
                    options: {
                        /* jsxImportSource: …, otherOptions… */
                    },
                },
            ],
        })

        return config
    },
}
