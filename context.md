# Project Context

## Goal
Build a minimal intranet portal assignment with containerization, Kubernetes deployment, monitoring, and CI/CD automation.

## Progress Checklist
- [x] Frontend updated to a minimal intranet portal layout
- [x] Docker multi-stage build added
- [x] Kubernetes deployment and service manifests added
- [x] Monitoring stack defined with Docker Compose
- [x] Jenkins pipeline added
- [x] Setup guide written
- [x] Validation completed

## Notes
- The React app lives in `intranet-portal/`.
- The current app uses Create React App scripts, so the container build will use `npm run build` from that folder.
- `docker compose config` validated the monitoring stack successfully.
- `kubectl` is not installed in this environment, so the Kubernetes manifests could not be dry-run validated here.