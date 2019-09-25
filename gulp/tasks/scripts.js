const gulp = require('gulp'),
	  webpack = require('webpack');

      gulp.task('scripts', function(){ 

        return new Promise((resolve)=>{
            webpack(require('../../webpack.config.js'),(err,status)=>{

                if(err){
                    console.log(err.toString())
                    }
                    console.log(status.toString());

                    resolve();

            })

        })
      
        });