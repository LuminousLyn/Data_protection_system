<script setup>
import {ref} from 'vue'
import {
    ElAside,
    ElContainer,
    ElHeader,
    ElMain,
    ElMenu,
    ElSubMenu,
    ElMenuItemGroup,
    ElMenuItem,
    ElRow,
    ElCard,
    ElMessage,
    ElButton,
    ElTable,
    ElTableColumn
} from 'element-plus';

const tableData = [
    {
        date: '测试1',
        name: '文件1',
        address: "<div style='text-align: center;'>对方已拒绝</div>",
    },
    {
        date: '测试2',
        name: '文件2',
        address: "<div style='display: flex;justify-content: space-around'><div>仅可用不可转发</div><el-button type=\"primary\">Primary</el-button></div>",
    },
    {
        date: '测试3',
        name: '文件3',
        address: "<div style='display: flex;justify-content: space-around'><div>可用可转发</div><el-button type='primary'>下载</el-button></div>",
    },
]
const tableData2 = [
    {
        date: 'A',
        name: '文件4',
        address: "<div style='text-align: center;'>对方已拒绝</div>",
    },
    {
        date: 'B',
        name: '文件5',
        address: "<div style='display: flex;justify-content: space-around'><div>仅可用不可转发</div><el-button type=\"primary\">Primary</el-button></div>",
    },
]
</script>

<template>
    <div class="mine">
        <el-card class="box-card">
            <template #header>
                <div class="card-header">
                    <h3 style="text-align: center;">我的申请</h3>
<!--                    <el-button class="button" text>Operation button</el-button>-->
                </div>
            </template>
            <div>
                <el-table :data="tableData" style="width: 100%" border>
                    <el-table-column prop="date" label="组织" width="180" />
                    <el-table-column prop="name" label="文件" width="180" />
                    <el-table-column label="" >
                        <template v-slot="scope">
                               <div style="display: flex;">
                                   <div v-html="scope.row.address"></div>
                                   <el-button style="margin-left: 40px" v-if="scope.row.date=='测试2'" type="success">下载</el-button>
                                   <el-button style="margin-left: 40px" v-if="scope.row.date=='测试3'" type="success">下载</el-button>
                               </div>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
        </el-card>
        <el-card class="box-card" style="margin-top: 20px">
            <template #header>
                <div class="card-header">
                    <h3 style="text-align: center;">申请信息</h3>
                    <!--                    <el-button class="button" text>Operation button</el-button>-->
                </div>
            </template>
            <div>
                <el-table :data="tableData2" style="width: 100%" border>
                    <el-table-column prop="date" label="组织" width="180" />
                    <el-table-column prop="name" label="文件" width="180" />
                    <el-table-column label="" >
                        <template v-slot="scope">
                            <div style="display: flex;">
                                <el-button style="margin-left: 40px" type="danger">拒绝</el-button>
                                <el-button style="margin-left: 40px" type="warning">授权亦可用</el-button>
                                <el-button style="margin-left: 40px" type="primary">可用可转发</el-button>
                            </div>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
        </el-card>
    </div>
</template>



<style lang="scss" scoped>
    .mine{
        height: 100%;
        width: 100%;
    }
</style>
