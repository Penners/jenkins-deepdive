pipeline {
    agent { any { image 'node:14.5.0' } }
    stages {
        stage('build') {
            steps {
                sh 'npm install'
            }
        }
        stage('tests') {
            steps {
                sh 'npm run tests '
            }
        }
    }
}
