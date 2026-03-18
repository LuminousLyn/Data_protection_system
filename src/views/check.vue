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
        ElTableColumn,
        ElUpload,
        ElMessageBox
    } from 'element-plus';
    const fileList=[]
    const tableData = [
        {
            date: '2016-05-03',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles',
        },
        {
            date: '2016-05-02',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles',
        },
        {
            date: '2016-05-04',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles',
        },
        {
            date: '2016-05-01',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles',
        },
    ]

    const handleRemove = (file, uploadFiles) => {
        console.log(file, uploadFiles)
    }

    const handlePreview = (uploadFile) => {
        console.log(uploadFile)
    }


    const beforeRemove= (uploadFile, uploadFiles) => {
        return ElMessageBox.confirm(
            `Cancel the transfer of ${uploadFile.name} ?`
        ).then(
            () => true,
            () => false
        )
    }
    const handleAvatarSuccess=(response, uploadFile)=> {
        console.log(response,uploadFile)
        // imageUrl.value = URL.createObjectURL(uploadFile.raw)
    }
    const handleCheck=()=>{
        ElMessage({
            message: '校验成功',
            type: 'success',
        })
    }

</script>

<template>
    <div class="check">
        <el-card>
            <div class="header">
                <el-upload
                        v-model:file-list="fileList"
                        class="upload-demo"
                        action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
                        :on-preview="handlePreview"
                        :on-remove="handleRemove"
                        :before-remove="beforeRemove"
                        :limit="1"
                        :on-success="handleAvatarSuccess"
                        style="display: flex;width: 400px;"
                >
                    <el-button type="primary">上传文件</el-button>
                </el-upload>
                <el-button type="success" @click="handleCheck">核验</el-button>
            </div>
        </el-card>
        <div class="con">
            <el-card style="width: 49%;min-height: 600px;">
                <template #header>
                    <div class="card-header">
                        <h3 style="text-align: center;">文件信息</h3>
                        <!--                    <el-button class="button" text>Operation button</el-button>-->
                    </div>
                </template>
                <el-table :data="tableData" style="width: 100%">
                    <el-table-column prop="date" label="Date" width="180" />
                    <el-table-column prop="name" label="Name" width="180" />
                    <el-table-column prop="address" label="Address" />
                </el-table>
            </el-card>
            <el-card style="width: 49%;min-height: 600px;">
                <template #header>
                    <div class="card-header">
                        <h3 style="text-align: center;">区块链信息</h3>

                        <!--                    <el-button class="button" text>Operation button</el-button>-->
                    </div>
                </template>
                <el-table :data="tableData" style="width: 100%">
                    <el-table-column prop="date" label="Date" width="180" />
                    <el-table-column prop="name" label="Name" width="180" />
                    <el-table-column prop="address" label="Address" />
                </el-table>
            </el-card>
        </div>
    </div>
</template>



<style lang="scss">
    .check{
        height: 100%;
        width: 100%;
        .header{
            display: flex;
            justify-content: center;
        }
        .el-upload-list{
            width: 300px !important;
        }
        .con{
            width: 100%;
            margin-top: 20px;
            display: flex;
            justify-content: space-between;
        }
    }
</style>
