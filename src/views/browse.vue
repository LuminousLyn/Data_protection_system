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
        ElDialog,
        ElMessageBox,
        ElInput,
        ElDatePicker,
        ElRadioGroup,
        ElRadio
    } from 'element-plus';
    const dialogVisible = ref(false)
    const value1 = ref('')
    const radio = ref(true)
    const tableData = [
        {
            organization: 'A',
            fileName: 'file1',
            id: '001',
            size: '1KB',
            des: '测试描述'
        },
        {
            organization: 'B',
            fileName: 'file2',
            id: '002',
            size: '2KB',
            des: '测试描述'
        },
        {
            organization: 'C',
            fileName: 'file3',
            id: '003',
            size: '3KB',
            des: '测试描述'
        },
        {
            organization: 'D',
            fileName: 'file4',
            id: '004',
            size: '4KB',
            des: '测试描述'
        },
    ]
    const fileId=ref('')
    const fileName=ref('')
    const dataNum=ref('')
    const history=ref('')
    const handleClose = (done) => {
        dialogVisible.value=false
        // ElMessageBox.confirm('Are you sure to close this dialog?')
        //     .then(() => {
        //         done()
        //     })
        //     .catch(() => {
        //         // catch error
        //     })
    }
    const showBox=(row)=>{
        console.log(row)
        dialogVisible.value=true
    }
</script>

<template>
    <div class="browse">
        <el-card class="box-card">
            <div>
                <el-table :data="tableData" style="width: 100%" border>
                    <el-table-column prop="organization" label="组织名称"  />
                    <el-table-column prop="fileName" label="文件名"  />
                    <el-table-column prop="id" label="ID"  />
                    <el-table-column prop="size" label="大小" />
                    <el-table-column prop="des" label="描述" width="500" />
                    <el-table-column label="操作" >
                        <template v-slot="scope">
                            <el-button style="margin-left: 40px" type="primary" @click="showBox(scope.row)">申请共享</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
        </el-card>
        <el-dialog
                v-model="dialogVisible"
                title="申请共享"
                width="30%"
                :before-close="handleClose"
        >
            <div>
                <div style="display: flex;width: 90%;align-items: center;margin-bottom: 16px;">
                    <div style="width: 18%;">文件ID：</div>
                    <div style="width: 82%;">
                        <el-input v-model="fileId"></el-input>
                    </div>
                </div>
                <div style="display: flex;width: 90%;align-items: center;margin-bottom: 16px;">
                    <div style="width: 18%;">文件名：</div>
                    <div style="width: 82%;">
                        <el-input v-model="fileName"></el-input>
                    </div>
                </div>
                <div style="display: flex;width: 90%;align-items: center;margin-bottom: 16px;">
                    <div style="width: 18%;">数据条目：</div>
                    <div style="width: 82%;">
                        <el-input v-model="dataNum"></el-input>
                    </div>
                </div>
                <div style="display: flex;width: 90%;align-items: center;margin-bottom: 16px;">
                    <div style="width: 18%;">上传时间：</div>
                    <div style="width: 82%;">
                        <el-date-picker
                                v-model="value1"
                                type="date"
                                placeholder="Pick a day"
                                :size="size"/>
                    </div>
                </div>
                <div style="display: flex;width: 90%;align-items: center;margin-bottom: 16px;">
                    <div style="width: 18%;">可转发：</div>
                    <div style="width: 82%;">
                        <el-radio-group v-model="radio" class="ml-4">
                            <el-radio :label="true">是</el-radio>
                            <el-radio :label="false">否</el-radio>
                        </el-radio-group>
                    </div>
                </div>
                <div style="display: flex;width: 90%;align-items: center;margin-bottom: 16px;">
                    <div style="width: 18%;">转发历史：</div>
                    <div style="width: 82%;">
                        <el-input v-model="history"></el-input>
                    </div>
                </div>
            </div>
            <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="dialogVisible = false">
          确认
        </el-button>
      </span>
            </template>
        </el-dialog>
    </div>
</template>



<style lang="scss" scoped>
    .browse{
        height: 100%;
        width: 100%;
    }
    .dialog-footer button:first-child {
        margin-right: 10px;
    }
</style>
