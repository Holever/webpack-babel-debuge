class DebuggerPlugin {

  constructor(options){
    console.log('options: ', options);
  }

  apply(_compiler) {
    const compiler = _compiler;
    compiler.hooks.done.tapPromise(this.constructor.name, async () => {
      try {
        await this.run();
      } catch (error) {
        // console.error(chalk.red(error.stack));
      }
    });
  }

  run(){
    
  }
}

module.exports = DebuggerPlugin