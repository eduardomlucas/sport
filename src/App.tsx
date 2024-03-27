import { Card, CardContent } from "./components/ui/card"
import { RouterProvider } from "react-router-dom";
import router from './routes';


function App() {

  return (
    <div className="p-10">
      <Card className="h-auto">
        <CardContent>
        <RouterProvider router={router} />
        </CardContent>
      </Card>
    </div>
  )
}

export default App
