pipeline {
  agent any
  stages {

    
    stage('Verify Node.js and Playwright') {
            steps {
                sh '''
                    # 检查 Node.js 版本
                    node --version
                    # 检查 npm 版本
                    npm --version
                    # 安装 Playwright
                    npm install -g playwright
                    # 测试 Playwright 安装
                    npx playwright --version
                '''
            }
    }
   

    stage('Run Playwright Tests') {
            steps {
                nodejs(nodeJSInstallationName: 'node') {
                    sh 'npx playwright test'
                }
            }
        }



  }
}