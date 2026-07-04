# Setup Guide

## What You Need Installed

- Docker Desktop with Kubernetes enabled.
- `kubectl` configured to talk to the Docker Desktop cluster.
- Node.js 20 or later if you want to run the React app locally outside Docker.
- Jenkins with access to Docker and `kubectl` if you want to run the pipeline.

## Enable Kubernetes in Docker Desktop

1. Open Docker Desktop.
2. Go to Settings.
3. Enable Kubernetes.
4. Wait until the cluster status shows as running.
5. Verify with:

```powershell
kubectl get nodes
```

## Build and Run the Portal Locally

From the repository root, run:

```powershell
docker build -t intranet-portal:1.0 .
kubectl apply -f deployment.yaml -f service.yaml
kubectl get pods
kubectl get service intranet-portal-service
```

Open the portal in your browser at:

```text
http://localhost:30080
```

## Start Monitoring Services

Run the monitoring stack from the repository root:

```powershell
docker compose up -d
```

### Default URLs and Credentials

- Nagios: `http://localhost:8080`
  - Username: `admin`
  - Password: `devops123`
- Graphite: `http://localhost:8081`
  - No login is required for the default web UI.
- Grafana: `http://localhost:3001`
  - Username: `admin`
  - Password: `admin123`

## How the Monitoring Pieces Fit Together

Nagios should check the Kubernetes NodePort exposed by the Service. If the cluster is on Docker Desktop, the service is available on `localhost:30080` from the host machine. A Nagios `check_http` command can point at that port to confirm the portal is up.

Graphite collects the time-series metrics. The Grafana provisioning file mounts Graphite as a datasource automatically, so Grafana can query it without manual setup. If you move the stack elsewhere, update the datasource URL to the Graphite host that Grafana can reach.

## Suggested Validation Order

```powershell
docker build -t intranet-portal:1.0 .
docker compose up -d
kubectl apply -f deployment.yaml -f service.yaml
kubectl rollout status deployment/intranet-portal
```

If you update the React app, rebuild the image before reapplying the deployment.