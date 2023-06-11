<template>
  <el-dialog v-model="dialogVisible" title="查询结果" width="30%">
    <el-form :model="dialogData">
      <el-form-item label="学院">
        <span>{{ dialogData.depart }}</span>
      </el-form-item>
      <el-form-item label="职称">
        <span>{{ dialogData.professional }}</span>
      </el-form-item>
      <el-form-item label="学校编号">
        <span>{{ dialogData.school }}</span>
      </el-form-item>
      <el-form-item label="教师姓名">
        <span>{{ dialogData.teacherName }}</span>
      </el-form-item>
      <el-form-item label="工号">
        <span>{{ dialogData.teacherNo }}</span>
      </el-form-item>
      <el-form-item label="创建时间">
        <span>{{ dialogData.createTime }}</span>
      </el-form-item>
      <el-form-item label="更新时间">
        <span>{{ dialogData.updateTime }}</span>
      </el-form-item>
      <el-form-item label="用户编号">
        <span>{{ dialogData.userId }}</span>
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
    <el-dialog v-model="dialogFormVisible" title="教师信息">
      <el-form :model="teacher">
        <el-form-item label="学院" :label-width="formLabelWidth">
          <el-input v-model="teacher.depart" autocomplete="off" />
        </el-form-item>
        <el-form-item label="职称" :label-width="formLabelWidth">
          <el-input v-model="teacher.professional" autocomplete="off" />
        </el-form-item>
        <el-form-item label="学校编号" :label-width="formLabelWidth">
          <el-input v-model="teacher.school" autocomplete="off" />
        </el-form-item>
        <el-form-item label="教师姓名" :label-width="formLabelWidth">
          <el-input v-model="teacher.teacherName" autocomplete="off" />
        </el-form-item>
        <el-form-item label="工号" :label-width="formLabelWidth">
          <el-input v-model="teacher.teacherNo" autocomplete="off" />
        </el-form-item>
        <el-form-item label="用户编号" :label-width="formLabelWidth">
          <el-input v-model="teacher.userId" autocomplete="off" />
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
        <el-table-column prop="depart" label="学院" width="80" align="center" />
        <el-table-column prop="professional" label="职称" width="80" align="center" />
        <el-table-column prop="school" label="学校编号" width="80" align="center" />
        <el-table-column prop="teacherName" label="教师姓名" width="80" align="center" />
        <el-table-column prop="teacherNo" label="工号" width="80" align="center" />
        <el-table-column prop="createTime" label="创建时间" width="80" align="center" />
        <el-table-column prop="updateTime" label="更新时间" width="80" align="center" />
        <el-table-column prop="userId" label="用户编号" width="150" align="center" />
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
import teacher from "@/http/teacher";
import { ElMessage, ElMessageBox } from "element-plus";
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      list: [],
      teacher: {},
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
      teacher.all().then((res) => {
        console.log(res);
        this.list = res.data.teachers;
      });
    },
    handleQuery() {
  const id = this.queryForm.id;
  const queryData = { id: id }; // 将 id 包装为对象
  teacher.one(queryData) // 传入对象作为参数
    .then((res) => {
      console.log(id);
      console.log(res.data.teacher);
      this.dialogData = res.data.teacher;
      this.dialogVisible = true;
    })
    .catch((error) => {
      console.error(error);
      ElMessage.error('查询失败');
    });
},
    toAdd() {
      this.teacher = {};
      this.dialogFormVisible = true;
    },
    handleEdit(id) {
  const queryData = { id: id };
  teacher
    .one(queryData)
    .then((res) => {
      console.log(res);
      this.teacher = res.data.teacher;
      this.dialogFormVisible = true;
    })
    .catch((error) => {
      console.error(error);
      ElMessage.error("获取学校信息失败");
    });
},
    handleDelete(id) {
      ElMessageBox.confirm("确定要删除该教师信息吗?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          const deleteData = { id: id };
          teacher
            .remove(deleteData)
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
      if (this.teacher.id) {
        this.updateTeacher();
      } else {
        this.addTeacher();
      }
    },
    addTeacher() {
      teacher.add(this.teacher)
        .then((res) => {
         // console.log(res);
          this.dialogFormVisible = false;
          this.fetchData();
          ElMessage.success("添加成功");
        })
        .catch((error) => {
          console.error(error);
          ElMessage.error("添加失败");
        });
    },
    updateTeacher() {
      teacher.update(this.teacher)
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
