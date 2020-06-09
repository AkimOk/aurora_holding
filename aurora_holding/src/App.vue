<template>
<div id="app">
        <p>Организационная структура</p>
        <ejs-treegrid :dataSource='data' childMapping='subtasks' :treeColumnIndex='0' width='500px' height='200vh' :editSettings='editSettings' :toolbar='toolbar'>
        <e-columns>
                <e-column field='taskName' :isPrimaryKey='true'  headerText=''  width=100 ></e-column>
                <e-column field='duration' headerText='Общее количество' width=80 textAlign='Right'></e-column>
                <e-column  headerText='Действия' :commands='commands'  width=80  textAlign='Right'></e-column>
                </e-columns>
        </ejs-treegrid>
</div>
</template>
<script>
import Vue from "vue";
import { TreeGridPlugin, Edit, Toolbar, CommandColumn } from "@syncfusion/ej2-vue-treegrid";
import sampleData from "./dataSource.js"
Vue.use(TreeGridPlugin);

export default {
  data() {
    return {
      data: sampleData,
      childMapping: 'subtasks',
      editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true,  mode: 'Cell',  newRowPosition: 'Child' },
       commands: [{ type: 'Edit', buttonOption: { cssClass: 'e-flat', iconCss: 'e-edit e-icons' } },
        { type: 'Delete', buttonOption: { cssClass: 'e-flat', iconCss: 'e-delete e-icons' } },
        { type: 'Save', buttonOption: { cssClass: 'e-flat', iconCss: 'e-update e-icons' } },
        { type: 'Cancel', buttonOption: { cssClass: 'e-flat', iconCss: 'e-cancel-icon e-icons' } }],
      toolbar: ['Add']
    };
  },
    provide: {
    treegrid: [ Toolbar, Edit, CommandColumn]
  }
}
</script>
<style>
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';  
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';  
@import '../node_modules/@syncfusion/ej2-calendars/styles/material.css';  
@import '../node_modules/@syncfusion/ej2-dropdowns/styles/material.css';  
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';  
@import '../node_modules/@syncfusion/ej2-navigations/styles/material.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css';
@import "../node_modules/@syncfusion/ej2-grids/styles/material.css";
@import "../node_modules/@syncfusion/ej2-treegrid/styles/material.css";
</style>