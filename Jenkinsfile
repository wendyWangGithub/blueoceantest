pipeline {
  agent any
    tools {
        nodejs 'NodeJS' // 这里的 'NodeJS' 是Jenkins中配置的Node.js工具名称
    }

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
                nodejs(nodeJSInstallationName: 'NodeJS') {
                    sh 'npx playwright test'
                }
            }
        }



  }
}