// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  "type": "service_account",
  "project_id": "personal-portfolio-840b7",
  "private_key_id": "c93770e441c271a2b75e3778d56367477c592596",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQCir2kWSSYkQOrI\npEctkHPUiAZeyVS104zEGuFeyJ5aflu1Pj2Mav9tNlgjlF0QFbHPx0CHSC85K3ck\nxLoMPgGFCBB18L8xfrug2SV99xDn8k6IAZV/3cUFXUBnKj1rj7QsylPXAJEC8JdE\nee5kwQKgNVX9Tzk/DBymq9e2RY5NpV8zYpNweTDPW78GrtUU3BzNEPniaZjF3GzA\nAoopfpLyo4ykDb1+pMHyg9Q5J+vdTrmWn3myPNGKhQfdIAvTsQOYDS3Or+2HYLGo\nzn5I8bxRsYABux6AFHquFZPX0fZt8PZh6I6WbQ1CnTRTQJcq9Qt2h7XUD3P+c0g/\n0bZlbZyjAgMBAAECggEAHi55ygsnGtm6VR/5HpBqlNbpi6NBZnxJZMZx4lJI4pQH\nso/J/meJXLsUzgED5OyJcPlP1OlE7Y/NSlJ/C69jO8l7uE3CQs32xEgU5xIznjx7\naksU78R2fWDIBnu1KmPeMuMUe9JclNWK0sbmPeX69Tr/6X9NqQ83r4o4+lVcKbZF\nE6uH4MhynCKKsfKiU4Z2hPVSDp3V7MWqNoehDUATyQY30CGwlmO8fMTJi9/nYU7H\nO1mfKBRwDncVB3IcOvG8QjLCPgW4hF0/PzvCdRlWZRfdW9uqJq3r1PbPZAgQCZmL\n0JFh0gEUwVcbmyRd8KoEqV/hmsLQg5WRdQ/JeEEY8QKBgQDaz2eqBSobmvp99ncv\nd35rzXr1z2h1QKWqmUGRKCY1hk/d6M5G5DlMLUtmrtJNKzkuf7PezXyPZxEFwqc/\n4zXIraszinuKMTgGBUsXYTCK4Q8l0Xw/oTMTYF4IdYW/8bdXonRvzVVhyoaaVhr8\nKww1rPm2R80EbT/iNiFpDgC/EwKBgQC+VfcxzOoCa+5RNoKI3EXd0Oui/WohORue\nV8YQ+qr+1JTvpdsRPd1cY2GrH534iKpJgqRX7wYjRgiQQdeayOimX1AEzHQsjI9d\ncKTKouiLpFyGDWYQkHK/Xpb5nzjUfaUA6lwpaQexpoSYXMJe1WvCm7dvdBRMSpG8\nVHjB/JIOMQKBgQCEOhn3EK/lhr4hKLPVp2xqUP4hVXlWgf6bHYoV4iFU7xmMjIc7\nJ+fINQb/wl2r7JbdlqZn2d2P+0S6KmtPnEqAPxLaTrFhTWUBnmlGc6EWC/NPc0yW\nVx+6cd3hVsPAvp2BA9dBSOBz/CNjWO1tvcXfGey9Tp6CMlMMrJF8Hs4sqQKBgQCZ\nISRtRoUGSbtET2yZm04CdXD+go7+B6n2rHtHccRcnL7uRyuGJZWQHMyZFijLqXgH\nCDocHMt9WXzOQoqplvXF1GzWT38v0C4PaO7LsGES57sghmsU7IHFAN7KGZVpL2Su\n5d4b2so73NJUmlwuW9oEia781hD2iA/TysoUl5USIQKBgQCpMGZYnG6nSQCnSvZG\nK1umxVxWTXpv5ulvolruFstWx0bONdz2XIRBXPGVPYxeGOzUueFmWLZp2r92UkIt\nX73hbkfVlMKoPB8Z8eF//zQ7pTywdH//mBJyfJ8s35UKUJu+4UmX5bpHtPolrwyi\nxODAxUeuKttjZEXGxgA67fXybQ==\n-----END PRIVATE KEY-----\n",
  "client_email": "firebase-adminsdk-fbsvc@personal-portfolio-840b7.iam.gserviceaccount.com",
  "client_id": "113817535540683920694",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-fbsvc%40personal-portfolio-840b7.iam.gserviceaccount.com",
  "universe_domain": "googleapis.com"
}


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
