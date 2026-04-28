pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/rohitkalal1122/attendance-system.git'
            }
        }

        stage('Build') {
            steps {
                bat 'echo Building Attendance Project...'
            }
        }
    }
}