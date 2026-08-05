# Deployment Guide (Phase 5)

## 1. Export Update Set
1. Go to **System Update Sets > Local Update Sets**
2. Ensure you were working in a dedicated Update Set for this project the whole
   time (create one named **"Network Request Management v1"** if you weren't)
3. Open it → click **Export to XML**
4. Save the downloaded `.xml` file into this repo under `deployment/update-set.xml`

## 2. Deployment Steps (Dev → Test → Prod)
1. In the target instance: **System Update Sets > Retrieved Update Sets**
2. Click **Import Update Set from XML** → upload the file
3. Open the imported set → **Preview Update Set** (resolves conflicts)
4. Resolve any flagged conflicts (usually none for a from-scratch build)
5. Click **Commit Update Set**
6. Smoke test: submit one request end-to-end in the target instance

## 3. Post-Deployment Checklist
- [ ] Catalog item visible in Service Portal
- [ ] Groups/roles exist and are assigned
- [ ] Business rules active (check Active checkbox)
- [ ] Flow is Published (not just Draft) in Flow Designer
- [ ] Notifications active
- [ ] ACLs active and tested with non-admin accounts
- [ ] Reports/dashboard rendering correctly

## 4. Rollback Plan
If issues are found after commit:
1. Go to the committed Update Set → **Back Out Update Set**
2. This reverts all changes included in that set
3. Fix issues in dev, re-export, and re-deploy
