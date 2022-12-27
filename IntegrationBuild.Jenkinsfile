podTemplate(yaml: '''
    cloud: Kubernetes-oracle
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
    stage('Build React App') {
      container('node') {
        checkout([$class: 'GitSCM', branches: [[name: SOURCE_BRANCH_NAME]], extensions: [], userRemoteConfigs: [[credentialsId: 'vardyng-github-pat', url: 'https://github.com/VardyNg/Portfilio.git']]])
        sh '''
          echo "SOURCE_BRANCH_NAME: $SOURCE_BRANCH_NAME"
          echo "TARGET_BRANCH_NAME: $TARGET_BRANCH_NAME"
          npm install --legacy-peer-deps
          npm run build
        '''
      }
    }
  }
}
