<template>
  <div class="adCates">
    <div class="adcate-tools">
      <el-button type="primary" @click="toAdd">添加</el-button>
      <el-button type="primary" @click="openSearchDialog">查询</el-button>
    </div>
    <el-table :data="adCates" style="width: 100%">
      <el-table-column fixed prop="id" label="id" width="50" />
      <el-table-column prop="departName" label="部门名称" />
      <el-table-column prop="departCode" label="部门英文" />
      <el-table-column prop="departDesc" label="部门描述" />
      <el-table-column prop="schoolId" label="学校id" />
      <el-table-column prop="departType" label="学院类型" />
      <el-table-column fixed="right" label="操作" width="120">
        <template #default="{ row }">
          <el-button link type="primary" size="small" @click="toEdit(row)">修改</el-button>
          <el-button link type="primary" size="small" @click="del(row.id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination layout="prev, pager, next" :page-size="page.size" :total="page.total" @current-change="currentchange" />

    <el-dialog v-model="dialogFormVisible" title="插入信息">
      <el-form :model="adCate">
        <el-form-item label="部门名称" :label-width="formLabelWidth">
          <el-input v-model="adCate.departName" autocomplete="off" />
        </el-form-item>
        <el-form-item label="部门英文" :label-width="formLabelWidth">
          <el-input v-model="adCate.departCode" autocomplete="off" />
        </el-form-item>
        <el-form-item label="部门描述" :label-width="formLabelWidth">
          <el-input v-model="adCate.departDesc" autocomplete="off" />
        </el-form-item>
        <el-form-item label="学校id" :label-width="formLabelWidth">
          <el-input v-model="adCate.schoolId" autocomplete="off" />
        </el-form-item>
        <el-form-item label="学院类型" :label-width="formLabelWidth">
          <el-input v-model="adCate.departType" autocomplete="off" />
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogFormVisible = false">Cancel</el-button>
          <el-button type="primary" @click="save">保存</el-button>
        </span>
      </template>
    </el-dialog>

    <!-- 新增代码：根据ID查询信息功能 -->
    <el-dialog v-model="searchDialogVisible" title="查询">
      <el-form>
        <el-form-item label="ID" :label-width="formLabelWidth">
          <el-input v-model="searchId" autocomplete="off" />
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="searchDialogVisible = false">取消</el-button>
          <el-button type="primary" @click="searchById">查询</el-button>
        </span>
      </template>
    </el-dialog>
  <!-- 添加展示查询结果的部分 -->
  <el-dialog v-model="searchResultVisible" title="查询结果">
    <el-form :model="searchResult">
      <el-form-item label="部门名称" :label-width="formLabelWidth">
        <el-input v-model="searchResult.departName" autocomplete="on" disabled />
      </el-form-item>
      <el-form-item label="部门英文" :label-width="formLabelWidth">
        <el-input v-model="searchResult.departCode" autocomplete="off" disabled />
      </el-form-item>
      <el-form-item label="部门描述" :label-width="formLabelWidth">
        <el-input v-model="searchResult.departDesc" autocomplete="off" disabled />
      </el-form-item>
      <el-form-item label="学校id" :label-width="formLabelWidth">
        <el-input v-model="searchResult.schoolId" autocomplete="off" disabled />
      </el-form-item>
      <el-form-item label="学院类型" :label-width="formLabelWidth">
        <el-input v-model="searchResult.departType" autocomplete="off" disabled />
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="searchResultVisible = false">关闭</el-button>
      </span>
    </template>
  </el-dialog>
</div>
</template>

<script>
import { defineComponent } from "vue";
import { adTopicPage, adTopicDelId, adTopicAdd, adTopicEdit, adTopicById } from "../../http/department";
import { ElMessage } from 'element-plus';
import { cloneDeep } from 'lodash-es';

export default defineComponent({
  data() {
    return {
      adCates: [],
      page: {
        total: 0,
        current: 1,
        size: 10
      },
      dialogFormVisible: false,
      adCate: {
        departName: "",
        id: 0,
        departCode: "",
        departDesc: '',
        schoolId: '',
        departType: ''
      },
      formLabelWidth: "80px",

      // 新增代码：根据ID查询信息功能
      searchDialogVisible: false,
      searchId: '',
      searchResult: {
    },
    searchResultVisible: false
    };
  },
  mounted() {
    this.getAdCatesPage(1);
  },
  methods: {
    toEdit(adcate) {
      this.dialogFormVisible = true;
      this.adCate = cloneDeep(adcate);
    },
    getAdCatesPage(current) {
      const data = {
        current: current,
        size: 5
      };
      adTopicPage(data)
        .then(res => {
          const page = res.data.page;
          this.adCates = page.records;
          this.page = page;
        })
        .catch(err => {
          console.log(err);
        });
    },
    currentchange(current) {
      this.getAdCatesPage(current);
      this.page.current = current;
    },
    del(id) {
      const params = {
        id: id
      };
      adTopicDelId(params)
        .then(res => {
          if (res.success) {
            this.getAdCatesPage(this.page.current);
          } else {
            console.log(res.msg);
            return false;
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    currentchange(current) {
    this.getAdCatesPage(current);
    this.page.current = current;
  },
    toAdd() {
      this.adCate = {
        departName: "",
        id: 0,
        departCode: "",
        departDesc: '',
        schoolId: '',
        departType: ''
      };
      this.dialogFormVisible = true;
    },
    save() {
      const adcate = this.adCate;
      if (adcate.id == 0) {
        adTopicAdd(adcate)
          .then(res => {
            if (res.success) {
              this.dialogFormVisible = false;
              this.getAdCatesPage(this.page.current);
              ElMessage.success(res.msg);
            } else {
              ElMessage.error(res.msg);
              return false;
            }
          })
          .catch(err => {
            ElMessage.error("网络错误，请联系管理员");
          });
      } else {
        adTopicEdit(adcate)
          .then(res => {
            if (res.success) {
              this.dialogFormVisible = false;
              this.getAdCatesPage(this.page.current);
              ElMessage.success(res.msg);
            } else {
              ElMessage.error(res.msg);
              return false;
            }
          })
          .catch(err => {
            ElMessage.error("网络错误，请联系管理员");
          });
      }
    },

    // 新增代码：根据ID查询信息功能
    openSearchDialog() {
      this.searchDialogVisible = true;
      this.searchId = '';
      this.searchResult = null;
    },
    searchById() {
    adTopicById({id:this.searchId})
      .then(res => {
        console.log(res.data);
      this.searchResult= res.data.department;
        this.searchResultVisible = true;
       
        console.log(res.data); // 添加打印语句
      })
      .catch(err => {
        console.log(err);
      });
  }
}
});
</script>
<style lang="scss" scoped></style>