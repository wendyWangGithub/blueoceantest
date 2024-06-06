pipeline {
  agent any
  stages {

    
     stage('Install Playwright') {
            steps {
                sh '''
                    # Install Node.js
                    curl -fsSL https://deb.nodesource.com/setup_14.x | sudo -E bash -
                    sudo apt-get install -y nodejs

                    # Install Playwright
                    npm install -g playwright
                '''
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