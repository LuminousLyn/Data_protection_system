<script setup>
    import {ref,reactive} from 'vue'
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
        ElForm,
        ElFormItem,
        ElInput,
        ElRadioGroup,
        ElRadio,
        ElUpload
    } from 'element-plus';
    const form = reactive({
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: '',
    })
    const fileList=[]
    const onSubmit = () => {
        console.log('submit!')
    }
    const handleAvatarSuccess=(response, uploadFile)=> {
        console.log(response,uploadFile)
        // imageUrl.value = URL.createObjectURL(uploadFile.raw)
    }
</script>

<template>
    <div class="upload">
        <el-card class="box-card">
            <el-form :model="form" label-width="120px" style="width: 500px">
                <el-form-item label="文件名">
                    <el-input v-model="form.name" />
                </el-form-item>
                <el-form-item label="数据条目">
                    <el-input v-model="form.name" />
                </el-form-item>
                <el-form-item label="数据大小">
                    <el-input v-model="form.name" />
                </el-form-item>
                <el-form-item label="可转发">
                    <el-radio-group v-model="form.resource">
                        <el-radio label="是" />
                        <el-radio label="否" />
                    </el-radio-group>
                </el-form-item>
                <el-form-item style="display: flex;align-items: center;height: 60px;">
                    <el-upload
                            v-model:file-list="fileList"
                            class="upload-demo"
                            action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
                            :limit="1"
                            :on-success="handleAvatarSuccess"
                            style="display: flex;"
                    >
                        <el-button type="primary">上传文件</el-button>
                    </el-upload>
<!--                    <el-button type="primary" @click="onSubmit">上传文件</el-button>-->
                    <el-button style="margin-left: 20px;">数据上链</el-button>
                </el-form-item>
            </el-form>
        </el-card>

    </div>
</template>



<style lang="scss" scoped>
    .upload{
        height: 100%;
        width: 100%;
    }
</style>
