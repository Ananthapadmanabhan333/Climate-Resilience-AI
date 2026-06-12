import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Activity, AlertTriangle, Droplet, Flame, ThermometerSun, Wind } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-50 p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-4xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500">
              Climate Resilience AI
            </h1>
            <p className="text-neutral-400 mt-2 text-lg">Global Risk Intelligence Dashboard</p>
          </div>
          <Badge variant="outline" className="text-teal-400 border-teal-400/30 bg-teal-400/10 px-4 py-1 text-sm">
            Live Monitoring Active
          </Badge>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-neutral-900 border-neutral-800">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-neutral-400">Global Risk Index</CardTitle>
              <Activity className="h-4 w-4 text-blue-500" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-neutral-50">72.4</div>
              <p className="text-xs text-neutral-500 mt-1">+2.1% from last month</p>
            </CardContent>
          </Card>
          
          <Card className="bg-neutral-900 border-neutral-800">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-neutral-400">Flood Probability</CardTitle>
              <Droplet className="h-4 w-4 text-cyan-400" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-cyan-400">HIGH</div>
              <p className="text-xs text-neutral-500 mt-1">Critical alerts in 3 regions</p>
            </CardContent>
          </Card>

          <Card className="bg-neutral-900 border-neutral-800">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-neutral-400">Heatwave Stress</CardTitle>
              <ThermometerSun className="h-4 w-4 text-orange-500" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-orange-500">SEVERE</div>
              <p className="text-xs text-neutral-500 mt-1">Temperatures exceeding 45°C</p>
            </CardContent>
          </Card>

          <Card className="bg-neutral-900 border-neutral-800">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-neutral-400">Drought Onset</CardTitle>
              <Wind className="h-4 w-4 text-amber-500" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-amber-500">MODERATE</div>
              <p className="text-xs text-neutral-500 mt-1">Soil moisture deficit detected</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <Card className="bg-neutral-900 border-neutral-800 h-[400px]">
              <CardHeader>
                <CardTitle className="text-neutral-50">Geo-AI Risk Map</CardTitle>
                <CardDescription className="text-neutral-400">Real-time compound disaster zones</CardDescription>
              </CardHeader>
              <CardContent className="h-[300px] flex items-center justify-center border-t border-neutral-800">
                {/* Placeholder for actual Leaflet/Mapbox integration */}
                <div className="text-center space-y-4">
                  <div className="inline-block p-4 rounded-full bg-neutral-800 border border-neutral-700">
                    <Activity className="h-8 w-8 text-neutral-500 animate-pulse" />
                  </div>
                  <p className="text-neutral-500 font-medium">Map Engine Initializing...</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-neutral-50 border-b border-neutral-800 pb-2">Early Warnings</h2>
            
            <Alert className="bg-red-950/30 border-red-900">
              <AlertTriangle className="h-4 w-4 text-red-500" />
              <AlertTitle className="text-red-500 font-semibold">RED ALERT: Flood</AlertTitle>
              <AlertDescription className="text-red-200/70 text-sm mt-1">
                Severe flooding expected in South Asia region within 48 hours. Recommend immediate evacuation of low-lying areas.
              </AlertDescription>
            </Alert>

            <Alert className="bg-orange-950/30 border-orange-900">
              <Flame className="h-4 w-4 text-orange-500" />
              <AlertTitle className="text-orange-500 font-semibold">ORANGE ALERT: Heatwave</AlertTitle>
              <AlertDescription className="text-orange-200/70 text-sm mt-1">
                Extreme heat expected across Southern Europe. High risk to elderly populations.
              </AlertDescription>
            </Alert>
            
            <Card className="bg-neutral-900 border-neutral-800 mt-8">
              <CardHeader>
                <CardTitle className="text-neutral-50 text-base">Policy Copilot Insights</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-neutral-400 space-y-3">
                <p>💡 <strong className="text-neutral-200">Recommendation:</strong> Pre-deploy water filtration units to Region Alpha based on 85% flood probability.</p>
                <p>💡 <strong className="text-neutral-200">Alert:</strong> Agricultural yields in Zone B projected to drop 20% due to emerging drought conditions.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  )
}
