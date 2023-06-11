<template>
  <el-dialog v-model="dialogVisible" title="查询结果" width="30%">
    <el-form :model="dialogData">
      <el-form-item label="省份">
        <span>{{ dialogData.province }}</span>
      </el-form-item>
      <el-form-item label="城市">
        <span>{{ dialogData.city }}</span>
      </el-form-item>
      <el-form-item label="县">
        <span>{{ dialogData.area }}</span>
      </el-form-item>
      <el-form-item label="学校名称">
        <span>{{ dialogData.schoolName }}</span>
      </el-form-item>
      <el-form-item label="学校说明">
        <span>{{ dialogData.description }}</span>
      </el-form-item>
      <el-form-item label="纬度">
        <span>{{ dialogData.latitude }}</span>
      </el-form-item>
      <el-form-item label="经度">
        <span>{{ dialogData.longitude }}</span>
      </el-form-item>
      
      <el-form-item label="是否启用">
        <span>{{ dialogData.enable }}</span>
      </el-form-item>
      <el-form-item label="住址">
        <span>{{ dialogData.address }}</span>
      </el-form-item>
    </el-form>
    <div class="footer-container">
      <el-button @click="dialogVisible = false">关闭</el-button>
    </div>
  </el-dialog>
  <div class="query-form">
    <el-form :model="queryForm" inline>
      <el-form-item label="">
        <el-input v-model="queryForm.id" placeholder="请输入id" clearable></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="handleQuery">查询</el-button>
        <el-button type="primary" @click="toAdd">添加</el-button>
      </el-form-item>
    </el-form>
  </div>
  <div class="root">
    <el-dialog v-model="dialogFormVisible" title="学校信息">
      <el-form :model="school">
        <el-form-item label="省份" :label-width="formLabelWidth">
          <el-input v-model="school.province" autocomplete="off" />
        </el-form-item>
        <el-form-item label="城市" :label-width="formLabelWidth">
          <el-input v-model="school.city" autocomplete="off" />
        </el-form-item>
        <el-form-item label="市|县" :label-width="formLabelWidth">
          <el-input v-model="school.area" autocomplete="off" />
        </el-form-item>
        <el-form-item label="学校名称" :label-width="formLabelWidth">
          <el-input v-model="school.schoolName" autocomplete="off" />
        </el-form-item>
        <el-form-item label="纬度" :label-width="formLabelWidth">
          <el-input v-model="school.latitude" autocomplete="off" />
        </el-form-item>
        <el-form-item label="经度" :label-width="formLabelWidth">
          <el-input v-model="school.longitude" autocomplete="off" />
        </el-form-item>
        <el-form-item label="是否启用" :label-width="formLabelWidth">
          <el-input v-model="school.enable" autocomplete="off" />
        </el-form-item>
        <el-form-item label="学校说明" :label-width="formLabelWidth">
          <el-input v-model="school.description" autocomplete="off" />
        </el-form-item>
        <el-form-item label="地址" :label-width="formLabelWidth">
          <el-input v-model="school.address" autocomplete="off" />
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取消</el-button>
          <el-button type="primary" @click="confirm()">确定</el-button>
        </span>
      </template>
    </el-dialog>
    <div class="table">
      <el-table :data="list" style="width: 100%">
        <el-table-column fixed prop="id" label="id" width="80" align="center" />
        <el-table-column prop="province" label="省份" width="80" align="center" />
        <el-table-column prop="city" label="城市" width="80" align="center" />
        <el-table-column prop="area" label="市|县" width="80" align="center" />
        <el-table-column prop="schoolName" label="学校名称" width="80" align="center" />
        <el-table-column prop="latitude" label="纬度" width="80" align="center" />
        <el-table-column prop="longitude" label="经度" width="80" align="center" />
        <el-table-column prop="enable" label="是否启用" width="80" align="center" />
        <el-table-column prop="description" label="学校说明" width="150" align="center" />
        <el-table-column prop="address" label="地址" width="120" align="center" />
        <el-table-column prop="createTime" label="创建时间" width="80" align="center" />
        <el-table-column prop="updateTime" label="修改时间" width="80" align="center" />
        <el-table-column fixed="right" label="操作" width="150" align="center">
          <template #default="scope">
            <el-button type="info" size="small" @click="handleEdit(scope.row.id)">修改</el-button>
            <el-button type="danger" size="small" @click="handleDelete(scope.row.id)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
import school from "@/http/school";
import { ElMessage, ElMessageBox } from "element-plus";
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      list: [],
      school: {},
      dialogFormVisible: false,
      queryForm: {
        id: "",
      },
      dialogVisible: false,
      dialogData: {},
      formLabelWidth: "80px",
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      school.all().then((res) => {
        console.log(res);
        this.list = res.data.schools;
      });
    },
    handleQuery() {
  const id = this.queryForm.id;
  school
    .one(id) // 直接传入 ID 值
    .then((res) => {
      console.log(res);
      this.dialogData = res.data.school;
      this.dialogVisible = true;
    })
    .catch((error) => {
      console.error(error);
      ElMessage.error('查询失败');
    });
},
    toAdd() {
      this.school = {};
      this.dialogFormVisible = true;
    },
    handleEdit(id) {
      const queryData = { id: id };
      console.log(queryData);
      school.update(queryData)
        .then((res) => {
          console.log(res);
          this.school = res.data.school;
          this.dialogFormVisible = true;
        })
        .catch((error) => {
          console.error(error);
          ElMessage.error("获取学校信息失败");
        });
    },
    handleDelete(id) {
      ElMessageBox.confirm("确定要删除该学校吗?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          const deleteData = { id: id };
          school
            .remove (deleteData)
            .then((res) => {
              console.log(res);
              this.fetchData();
              ElMessage.success("删除成功");
            })
            .catch((error) => {
              console.error(error);
              ElMessage.error("删除失败");
            });
        })
        .catch(() => {});
    },
    confirm() {
      if (this.school.id) {
        this.updateSchool();
      } else {
        this.addSchool();
      }
    },
    addSchool() {
      school
        .add(this.school)
        .then((res) => {
          console.log(res);
          this.dialogFormVisible = false;
          this.fetchData();
          ElMessage.success("添加成功");
        })
        .catch((error) => {
          console.error(error);
          ElMessage.error("添加失败");
        });
    },
    updateSchool() {
      school.update(this.school)
        .then((res) => {
          console.log(res);
          this.dialogFormVisible = false;
          this.fetchData();
          ElMessage.success("修改成功");
        })
        .catch((error) => {
          console.error(error);
          ElMessage.error("修改失败");
        });
    },
  },
});
</script>
<style scoped>
.query-form {
  margin-bottom: 20px;
}

.root {
  padding: 10px;
}

.footer-container {
  text-align: right;
  margin-top: 20px;
}
</style>