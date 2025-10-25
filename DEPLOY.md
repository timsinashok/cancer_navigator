# Deploying to Render - Simple Guide

Your app is now a standard Next.js application with no database - this makes deployment super simple!

## Quick Deployment Steps

### Method 1: Using Blueprint (Easiest - 2 Minutes!)

1. **Push your code to GitHub/GitLab/Bitbucket**
   ```bash
   git add .
   git commit -m "Ready for Render deployment"
   git push
   ```

2. **Deploy with Blueprint**
   - Go to [Render Dashboard](https://dashboard.render.com)
   - Click **New +** → **Blueprint**
   - Connect your repository
   - Render will automatically use your `render.yaml` file
   - Click **Apply** and you're done! ✨

3. **Your app will be live at:**
   ```
   https://cancer-navigator.onrender.com
   ```

### Method 2: Manual Setup (5 Minutes)

1. **Push your code to Git** (if not already done)

2. **Create Web Service on Render**
   - Go to [Render Dashboard](https://dashboard.render.com)
   - Click **New +** → **Web Service**
   - Connect your Git repository
   - Select your repository and branch

3. **Configure the service:**
   ```
   Name: cancer-navigator (or any name you want)
   Region: Oregon (or closest to you)
   Branch: main
   Runtime: Node
   Build Command: npm install && npm run build
   Start Command: npm start
   Instance Type: Free
   ```

4. **Environment Variables** (optional):
   ```
   NODE_ENV=production
   ```

5. **Click "Create Web Service"** and wait 3-5 minutes for deployment!

## That's It!

Your app will automatically deploy. No database setup needed, no complex configuration!

## What Happens During Deployment

1. Render installs your dependencies (`npm install`)
2. Builds your Next.js app (`npm run build`)
3. Starts the production server (`npm start`)
4. Your app is live! 🎉

## Your App URLs

After deployment:
- **Production URL**: `https://your-app-name.onrender.com`
- **Custom domain**: Can be added in Render settings

## Free Tier Details

✅ **What you get:**
- 750 hours/month (plenty for a demo/portfolio project)
- Automatic HTTPS
- Automatic deployments on git push
- Custom domains support

⚠️ **Limitations:**
- App sleeps after 15 minutes of inactivity
- First request after sleep takes 30-60 seconds to wake up
- 512MB RAM

💡 **Upgrade to $7/month Starter plan for:**
- Always-on (no sleep)
- Faster performance
- More resources

## Updating Your App

Just push to your repository:
```bash
git add .
git commit -m "Your changes"
git push
```

Render automatically detects changes and redeploys! 🚀

## Troubleshooting

### Build Fails
- Check build logs in Render dashboard
- Make sure all dependencies are in `package.json`
- Verify `npm run build` works locally

### App Won't Start
- Check that `package.json` has correct start script
- Look at runtime logs in Render dashboard

### 404 Errors
- Clear Next.js cache: Delete `.next` folder locally and rebuild
- Verify your routes are correct in `src/app/`

### App is Slow
- Free tier spins down after 15 min inactivity
- First request takes 30-60s to wake up
- Upgrade to Starter plan for always-on service

## Cost Estimate

**Your setup: 100% FREE!** 🎉
- No database
- No additional services
- Just a simple web service on free tier

## Next Steps

After deployment, you might want to:
1. **Add a custom domain** (Render Settings → Custom Domains)
2. **Set up auto-deploy** (already enabled by default)
3. **Monitor logs** (Dashboard → Your Service → Logs)
4. **Check health** - Your health check is at: `https://your-app.onrender.com/`

## Support

- [Render Docs](https://render.com/docs)
- [Next.js Deployment Docs](https://nextjs.org/docs/deployment)
- [Render Community](https://community.render.com)

---

**That's all! Your simple Next.js app is perfect for Render's free tier. Enjoy! 🚀**
