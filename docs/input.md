```html
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
```