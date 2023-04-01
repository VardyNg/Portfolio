podTemplate(
  yaml: '''
    apiVersion: v1
    kind: Pod
    spec:
      containers:
      - name: node
        image: node:16.17-alpine3.15
        resources:
          limits:
            cpu: "2"
            memory: "4Gi"
        command:
        - sleep
        args:
        - 99d
''') {
  node(POD_LABEL) {
    stage('Get branch name') {
      // handle BRANCH_NAME different in PR build and Branch Build
      if (BRANCH_NAME.startsWith('PR')) {
        env.SOURCE_BRANCH_NAME = "${env.CHANGE_BRANCH}"
      } else {
        env.SOURCE_BRANCH_NAME = "${env.BRANCH_NAME}"
      }
    }

    stage('Build React App') {
      container('node') {
        checkout([$class: 'GitSCM', branches: [[name: SOURCE_BRANCH_NAME]], extensions: [], userRemoteConfigs: [[credentialsId: 'vardyng-github-pat', url: 'https://github.com/VardyNg/Portfolio.git']]])
        sh '''
          echo "SOURCE_BRANCH_NAME: $SOURCE_BRANCH_NAME"
          npm install --legacy-peer-deps
          npm run build
        '''
      }
    }
  }
}
