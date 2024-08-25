// vite.config.ts  
import { defineConfig } from 'vite';  
import { terser } from 'rollup-plugin-terser';
export default defineConfig({  
  build: {  
    lib: {  
      entry: './src/index.ts',  
      name: 'MyTsLibrary',  
      fileName: (format) => `my-ts-library.${format}.js`,  
      formats: ['es', 'umd', 'cjs'], // 支持 ES, UMD, CommonJS  
    },  
    rollupOptions: {  
      // 确保外部化处理 peer 依赖  
      external: [], // 根据实际情况添加外部依赖  
      plugins: [
        terser({  
          // terser 插件的配置选项  
          compress: {  
            drop_console: true, // 移除所有的 `console` 语句  
            // 其他压缩选项...  
          },  
          // 其他 terser 配置...  
        }),  
      ], //
      output: {  
        // 自定义全局变量（如果需要）  
        // globals: {  
        //   someDependency: 'SomeDependency'  
        // },  
      },  
    },  
  },  
});