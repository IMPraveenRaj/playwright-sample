pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/IMPraveenRaj/playwright-sample.git'
            }
        }

        stage('Install Node & Dependencies') {
            steps {
                sh '''
                apt-get update
                apt-get install -y curl gnupg
                curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
                apt-get install -y nodejs
                npm install
                npx playwright install --with-deps
                '''
            }
        }

        stage('Run Tests') {
            steps {
                sh 'npx playwright test --reporter=junit --output=results'
            }
        }

        stage('Publish Results') {
            steps {
                junit 'results/*.xml'
            }
        }
    }
}
