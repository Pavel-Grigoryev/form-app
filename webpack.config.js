const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env) => {

    const paths = {
        entry: path.resolve(__dirname, "src", "index.js"),
        build: path.resolve(__dirname, "build"),
        html: path.resolve(__dirname, "public", "index.html")
    };

    const mode = env.mode || "development";
    const isDev = mode === "development";
    const PORT = env.port || 3000;

    return {
        mode,
        entry: paths.entry,
        output: {
            filename: "[name].[contenthash].js",
            path: paths.build,
            clean: true,
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: paths.html
            }),
            new webpack.ProgressPlugin(),
            new MiniCssExtractPlugin({
                filename: "css/min.[contenthash].css"
            })
        ],
        resolve: {extensions: [".js"]},
        devtool: isDev ? "inline-source-map" : undefined,
        devServer: {
            port: PORT,
            open: true,
            hot: true
        },
        module: {
            rules: [
                {
                    test: /\.s[ac]ss$/i,
                    use: [
                        isDev ? "style-loader": MiniCssExtractPlugin.loader,
                        "css-loader",
                        "sass-loader",
                    ],
                },
                {
                    test: /\.(png|jpe?g|gif|webp|svg)$/i,
                    type: 'asset/resource',
                    generator: {
                        filename: () => {
                            return isDev ? 'img/[name][ext]' : 'img/[name].[contenthash][ext]';
                        }
                    }
                }
            ],
        }

    };
};




