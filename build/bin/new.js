'use strict';

console.log();
process.on('exit', () => {
  console.log();
});

if (!process.argv[2]) {
  console.error('[组件名]必填 - Please enter new component name');
  process.exit(1);
}

const path = require('path');
const fileSave = require('file-save');
const uppercamelcase = require('uppercamelcase');
const componentname = process.argv[2];
const chineseName = process.argv[3] || componentname;
const ComponentName = uppercamelcase(componentname);

const filePath = path.resolve(__dirname, '../../src');
const Files = [
  {
    filename: `components/${componentname}/${ComponentName}.vue`,
    content: `<style lang="stylus" scoped>
	
</style>

<template>
	<div class="x-${componentname}">
		
	</div>
</template>

<script>
export default {
	name: 'X${ComponentName}'
}
</script>`
  },
  {
  	filename: `pages/${componentname}.vue`,
  	content: `<style lang="stylus">
	
</style>

<template>
	<div class="${componentname}-page" v-title data-title="${componentname}">
		<x-${componentname}></x-${componentname}>
	</div>
</template>

<script>
export default {
	
}
</script>`
  }
];
// 创建 组件文件
Files.forEach(file => {
  fileSave(path.join(filePath, file.filename))
  .write(file.content, 'utf8')
  .end('\n');
});

const componentsFile = require('../../src/components/components.json');

if (componentsFile[ComponentName]) {
  console.error(`${componentname} 已存在.`);
  process.exit(1);
}

componentsFile[ComponentName] = `./${componentname}/${ComponentName}`

// fileSavefileSave(path.join(filePath, file.filename))
fileSave(path.join(__dirname, '../../src/components/components.json'))
  .write(JSON.stringify(componentsFile, null, '  '), 'utf8')
  .end('\n');

// console.log(componentsFile, ComponentName)
