---
layout: null
---

navigator.serviceWorker.getRegistrations().then(registrations => {
  for (const registration of registrations) {
      registration.unregister();
      location.reload();
  } 
});