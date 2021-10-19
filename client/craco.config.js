const CracoLessPlugin = require('craco-less');
const { CracoAliasPlugin, configPaths } = require('react-app-rewire-alias')

module.exports = {
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: { '@primary-color': '#0357D1' },
                        javascriptEnabled: true,
                    },
                },
            },
        },
        {
            plugin: CracoAliasPlugin,
            options: {
                alias: configPaths('./tsconfig.paths.json')
            },
        }
    ],
};