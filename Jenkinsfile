pipeline {
    agent any

    tools {nodejs "node"}

    stages {
        stage('Cypress Parallel Test Suite') {
            parallel {
                stage('Slave Node1') {
                    agent {
                        label "remote_node1"
                    }
                    steps {
                        git url:'https://github.com/thuyenh1081/cypress-auto-framwork.git'
                        // sh 'npm install'
                        // sh 'npm update'
                        sh 'npm run triggerAllTests-checkbox-dashboard'

                    }
                }

                stage('Slave Node2') {
                    agent {
                        label "remote_node2"
                    }
                    steps {
                        git url:'https://github.com/thuyenh1081/cypress-auto-framwork.git'
                        // sh 'npm install'
                        // sh 'npm update'
                        sh 'npm run triggerAllTests-checkbox-dashboard'
                    }
                }
            }
        }
    }
}