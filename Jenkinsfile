pipeline {
    agent {
        docker {
            image 'mcr.microsoft.com/playwright:focal'
            args '-v /var/run/docker.sock:/var/run/docker.sock'
        }
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/IMPraveenRaj/playwright-sample.git'
            }
        }

        stage('Install Node & Dependencies') {
            steps {
                sh '''
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
