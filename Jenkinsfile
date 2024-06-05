pipeline {
  agent any
  stages {


    stage('Install Node.js') {
            steps {
                nodejs(nodeJSInstallationName: 'node') {
                    sh 'npm install'
                }
            }
        } 
    
    stage('Install Playwright') {
            steps {
                nodejs(nodeJSInstallationName: 'node') {
                    sh 'npm install -g playwright'
                }
            }
        }
    
    stage('Checkout') {
            steps {
                checkout([
                    $class: 'GitSCM',
                    branches: [[name: '*/master']],
                    extensions: [],
                    userRemoteConfigs: [[
                        credentialsId: 'github-credentials',
                        url: 'https://github.com/wendyWangGithub/blueoceantest.git'
                    ]]
                ])
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