<template>
  <div id="app">
    <div id="btn-demo" class="row">
      <MButton>默认</MButton>
      <MButton type="success" size="sm" @click="handleClick">成功</MButton>
      <MButton type="primary" size="md" @click="handleClick">主要</MButton>
      <MButton type="danger" size="mini" @click="handleClick">失败</MButton>
      <MButton type="danger" size="sm" disabled>禁止</MButton>
      <MButton type="text" size="sm" @click="handleClick">文字</MButton>
    </div>

    <div id="btn-group-demo" class="row">
      <MButtonGroup>
        <MButton>左</MButton>
        <MButton>中</MButton>
        <MButton>右</MButton>
      </MButtonGroup>
    </div>

    <div id="btn-input" class="row">
      <MInput placeholder="请输入数据" />
      <MInput value="我是谁" placeholder="请输入数据" @blur="showInputData" />
      <MInput type="password" placeholder="请输入密码" />
      <MInput value="333333333" disabled placeholder="请输入数据" />
      <MInput value="55555555555" readonly placeholder="请输入数据" />

      <div class="m-row">
        <MInput placeholder="请输入数据">
          <template slot="before">http://</template>
          <template slot="after">.com</template>
        </MInput>
      </div>
    </div>

    <div id="row-accordion-1" class="row">
      <MAccordion :selected="selected1" @update:selected="onChange2">
        <MAccordionItem title="Accordion Item #1" name="1">
          <strong>This is the first item's accordion body.</strong>
          It is shown by default, until the collapse plugin adds the appropriate
          classes that we use to style each element. These classes control the
          overall appearance, as well as the showing and hiding via CSS
          transitions.
        </MAccordionItem>
        <MAccordionItem title="Accordion Item #2" name="2">
          <strong>This is the second item's accordion body.</strong>
        </MAccordionItem>
        <MAccordionItem title="Accordion Item #3" name="3">
          <strong>This is the three item's accordion body.</strong>
        </MAccordionItem>
      </MAccordion>
    </div>

    <div id="row-accordion-2" class="row">
      <MAccordion :selected="selected2" single @update:selected="onChange2">
        <MAccordionItem title="Accordion Item #4" name="4">
          <strong>This is the four item's accordion body.</strong>
          It is shown by default, until the collapse plugin adds the appropriate
          classes that we use to style each element. These classes control the
          overall appearance, as well as the showing and hiding via CSS
          transitions.
        </MAccordionItem>
        <MAccordionItem title="Accordion Item #5" name="5">
          <strong>This is the five item's accordion body.</strong>
        </MAccordionItem>
        <MAccordionItem title="Accordion Item #6" name="6">
          <strong>This is the six item's accordion body.</strong>
        </MAccordionItem>
      </MAccordion>
    </div>

    <div id="row-message" class="row">
      <MButton @click="showTxtMessage">弹出文本</MButton>
      <MButton @click="showHtmlMessage">弹出HTML</MButton>
      <MButton @click="showPosMessage">指定位置弹出</MButton>
      <MButton @click="showDefMessage">自定义关闭按钮</MButton>
    </div>

    <div id="row-tab" class="row">
      <MTab selected="tab1">
        <MTabHead>
          <MTabItem name="tab1">tab1</MTabItem>
          <MTabItem name="tab2">tab2</MTabItem>
          <MTabItem name="tab3">tab3</MTabItem>
          <MTabItem name="tab4">tab4</MTabItem>
        </MTabHead>
        <MTabPanel name="tab1">
            tab1
          </MTabPanel>
          <MTabPanel name="tab2">
            tab2
          </MTabPanel>
          <MTabPanel name="tab3">
            tab3
          </MTabPanel>
          <MTabPanel name="tab4">
            tab4
          </MTabPanel>
      </MTab>
    </div>

    <div id="row-tab" class="row">
      <MTab selected="tab1" direction="vertical">
        <MTabHead>
          <MTabItem name="tab1">tab1</MTabItem>
          <MTabItem name="tab2">tab2</MTabItem>
          <MTabItem name="tab3">tab3</MTabItem>
          <MTabItem name="tab4">tab4</MTabItem>
        </MTabHead>
        <MTabPanel name="tab1">
            tab1
          </MTabPanel>
          <MTabPanel name="tab2">
            tab2
          </MTabPanel>
          <MTabPanel name="tab3">
            tab3
          </MTabPanel>
          <MTabPanel name="tab4">
            tab4
          </MTabPanel>
      </MTab>
    </div>

    <div id="row-table" class="row">
      <m-table :data="tableData" striped border>
        <m-table-column label="日期" prop="date" />
        <m-table-column label="姓名" prop="name" />
        <m-table-column label="地址" prop="address" />
      </m-table>
    </div>

    <div id="row-modal" class="row">
      <m-button @click="showModal1">显示模态窗口</m-button>
    </div>

    <div id="row-progress" class="row">
      <m-progress :percentage="50" customColor="#409eff" />

      <m-progress type="circle" :percentage="50" customColor="#409eff" />
      <m-progress type="circle" :percentage="90" customColor="#409eff" />
    </div>

    <div id="row-carousel" class="row">
      <m-carousel height="280px" pagePosition="inside">
        <m-carousel-item v-for="item in 4" :key="item">
          <h3 class="small">{{ item }}</h3>
        </m-carousel-item>
      </m-carousel>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      selected1: ["1"],
      selected2: ["4"],
      tableData: [
        {
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }
      ]
    };
  },
  created() {},
  methods: {
    handleClick(e) {
      console.log(e);
    },

    showInputData() {
      console.log(this);
    },

    onChange2() {},

    showTxtMessage() {
      this.$message("这是一条提示");
    },
    showHtmlMessage() {
      this.$message("<strong style='color: red;'>我</strong>是谁", {
        enableHTML: true,
      });
    },
    showPosMessage() {
      this.$message("从中间弹出消息", {
        position: "middle",
      });
    },

    showDefMessage() {
      this.$message("自定义关闭按钮", {
        autoClose: false,
        closeButton: {
          text: "关闭",
          callback: () => {
            console.log("关闭了 Message");
          },
        },
      });
    },

    showModal1() {
      this.$alert('这是一段内容', '标题名称', {
          confirmButtonText: '确定',
          callback: action => {
            this.$message("这是一条提示");
          }
      })
    }
  },
};
</script>

<style lang="less" scoped>
html,
body {
  margin: 0;
  height: 100%;
}
#app {
  height: 100%;
}
#btn-demo .m-button {
  margin: 3px;
}
.row {
  padding: 20px 0;
}
.m-row {
  width: 100%;
  .m-input-wrapper {
    display: inline-table;
    .m-input {
      border-radius: 0;
    }
  }
}

.m-carousel-item h3{
  text-align: center;
  line-height: 270px;
  color: #fff;
}

.m-carousel-item:nth-child(3){
    background-color: #76fc76;
}
.m-carousel-item:nth-child(4){
    background-color: rgb(253, 253, 115);
}
.m-carousel-item:nth-child(5){
    background-color: rgb(117, 117, 248);
}
.m-carousel-item:nth-child(6){
    background-color: pink;
}
.m-carousel-item:nth-child(7){
    background-color: rgb(248, 205, 125);
}
</style>
