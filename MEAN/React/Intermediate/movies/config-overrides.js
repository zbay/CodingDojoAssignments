const config = {
    plugins: [
      new webpack.DefinePlugin({
        'process.env':{
          'API_KEY': process.env.API_KEY
        }
      })
    ]
  }