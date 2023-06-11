<template>
    <el-aside width="200px">
        <el-menu  default-active="2" router class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
            <el-sub-menu index="1">
                <template #title>
                    <el-icon>
                        <location />
                    </el-icon>
                    <span>泉州信息工程学院</span>
                </template>
                <el-menu-item-group title="功能">
                    <el-menu-item index="/admin/map">位置</el-menu-item>
                    <el-menu-item index="/admin/school">学校管理</el-menu-item>
                    <el-menu-item index="/admin/department">部门管理</el-menu-item>
                    <el-menu-item index="/admin/teacher">教师管理</el-menu-item>
                </el-menu-item-group>     
            </el-sub-menu>
        </el-menu>






    </el-aside>
</template>

<script>
import { defineComponent } from 'vue';
import {
    Document,
    Menu,
    Location,
    Setting,
} from '@element-plus/icons-vue'
export default defineComponent({
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath)
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath)
        },
    },
    components: {
        Document,
        Menu,
        Location,
        Setting,
    }
});
</script>
<style lang = "scss" scoped></style>