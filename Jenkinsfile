pipeline {
    agent any

    stages {
        stage('Run Playwright in Docker') {
            steps {
                script {
                    docker.image('mcr.microsoft.com/playwright:focal').inside {
                        sh 'npm install'
                        sh 'npx playwright install --with-deps'
                        sh 'npx playwright test --reporter=junit --output=results'
                    }
                }
            }
        }

        stage('Publish Results') {
            steps {
                junit 'results/*.xml'
            }
        }
    }
}
