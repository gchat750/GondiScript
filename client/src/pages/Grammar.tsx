import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Grammar() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto p-6 space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Masaram Gondi Grammar
          </h1>
          <p className="text-muted-foreground">
            Complete grammar guide in Hindi
          </p>
        </div>

        <Tabs defaultValue="vowels" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="vowels" data-testid="tab-vowels">स्वर (Vowels)</TabsTrigger>
            <TabsTrigger value="consonants" data-testid="tab-consonants">व्यंजन (Consonants)</TabsTrigger>
            <TabsTrigger value="numbers" data-testid="tab-numbers">अंक (Numbers)</TabsTrigger>
          </TabsList>

          <TabsContent value="vowels" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="font-gondi text-2xl">सूर्क (गोंडी स्वर)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="p-3 text-left font-gondi text-xl">Gondi</th>
                        <th className="p-3 text-left">Hindi</th>
                        <th className="p-3 text-left">Pronunciation</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-border hover-elevate">
                        <td className="p-3 font-gondi text-2xl">𑴀</td>
                        <td className="p-3">अ</td>
                        <td className="p-3">a</td>
                      </tr>
                      <tr className="border-b border-border hover-elevate">
                        <td className="p-3 font-gondi text-2xl">𑴁</td>
                        <td className="p-3">आ</td>
                        <td className="p-3">aa</td>
                      </tr>
                      <tr className="border-b border-border hover-elevate">
                        <td className="p-3 font-gondi text-2xl">𑴂</td>
                        <td className="p-3">इ</td>
                        <td className="p-3">i</td>
                      </tr>
                      <tr className="border-b border-border hover-elevate">
                        <td className="p-3 font-gondi text-2xl">𑴃</td>
                        <td className="p-3">ई</td>
                        <td className="p-3">ii</td>
                      </tr>
                      <tr className="border-b border-border hover-elevate">
                        <td className="p-3 font-gondi text-2xl">𑴄</td>
                        <td className="p-3">उ</td>
                        <td className="p-3">u</td>
                      </tr>
                      <tr className="border-b border-border hover-elevate">
                        <td className="p-3 font-gondi text-2xl">𑴅</td>
                        <td className="p-3">ऊ</td>
                        <td className="p-3">oo</td>
                      </tr>
                      <tr className="border-b border-border hover-elevate">
                        <td className="p-3 font-gondi text-2xl">𑴆</td>
                        <td className="p-3">ए</td>
                        <td className="p-3">e</td>
                      </tr>
                      <tr className="border-b border-border hover-elevate">
                        <td className="p-3 font-gondi text-2xl">𑴈</td>
                        <td className="p-3">ऐ</td>
                        <td className="p-3">ai</td>
                      </tr>
                      <tr className="border-b border-border hover-elevate">
                        <td className="p-3 font-gondi text-2xl">𑴉</td>
                        <td className="p-3">ओ</td>
                        <td className="p-3">o</td>
                      </tr>
                      <tr className="border-b border-border hover-elevate">
                        <td className="p-3 font-gondi text-2xl">𑴋</td>
                        <td className="p-3">औ</td>
                        <td className="p-3">au</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="consonants" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="font-gondi text-2xl">वंजेग (गोंडी व्यंजन)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                  {[
                    { g: "𑴌", h: "क", p: "ka" },
                    { g: "𑴍", h: "ख", p: "kha" },
                    { g: "𑴎", h: "ग", p: "ga" },
                    { g: "𑴏", h: "घ", p: "gha" },
                    { g: "𑴐", h: "ड़", p: "Fa" },
                    { g: "𑴑", h: "च", p: "ca" },
                    { g: "𑴒", h: "छ", p: "cha" },
                    { g: "𑴓", h: "ज", p: "ja" },
                    { g: "𑴔", h: "झ", p: "jha" },
                    { g: "𑴕", h: "ञ", p: "Ya" },
                    { g: "𑴖", h: "ट", p: "Ta" },
                    { g: "𑴗", h: "ठ", p: "Tha" },
                    { g: "𑴘", h: "ड", p: "Da" },
                    { g: "𑴙", h: "ढ़", p: "Dha" },
                    { g: "𑴚", h: "ण", p: "Na" },
                    { g: "𑴛", h: "त", p: "ta" },
                    { g: "𑴜", h: "थ", p: "tha" },
                    { g: "𑴝", h: "द", p: "da" },
                    { g: "𑴞", h: "ध", p: "dha" },
                    { g: "𑴟", h: "न", p: "na" },
                    { g: "𑴠", h: "प", p: "pa" },
                    { g: "𑴡", h: "फ", p: "pha" },
                    { g: "𑴢", h: "ब", p: "ba" },
                    { g: "𑴣", h: "भ", p: "bha" },
                    { g: "𑴤", h: "म", p: "ma" },
                    { g: "𑴥", h: "य", p: "ya" },
                    { g: "𑴦", h: "र", p: "ra" },
                    { g: "𑴧", h: "ल", p: "la" },
                    { g: "𑴨", h: "व", p: "va" },
                    { g: "𑴩", h: "श", p: "sha" },
                  ].map((item, i) => (
                    <Card key={i} className="hover-elevate">
                      <CardContent className="p-4 text-center">
                        <div className="font-gondi text-3xl text-primary mb-2">{item.g}</div>
                        <div className="text-sm text-muted-foreground">{item.h} - {item.p}</div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="numbers" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="font-gondi text-2xl">कंकू (अंक)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-5 md:grid-cols-10 gap-4">
                  {[
                    { g: "𑵑", n: "1" },
                    { g: "𑵒", n: "2" },
                    { g: "𑵓", n: "3" },
                    { g: "𑵔", n: "4" },
                    { g: "𑵕", n: "5" },
                    { g: "𑵖", n: "6" },
                    { g: "𑵗", n: "7" },
                    { g: "𑵘", n: "8" },
                    { g: "𑵙", n: "9" },
                    { g: "𑵐", n: "0" },
                  ].map((item, i) => (
                    <Card key={i} className="hover-elevate">
                      <CardContent className="p-4 text-center">
                        <div className="font-gondi text-4xl text-primary mb-2">{item.g}</div>
                        <div className="text-sm text-muted-foreground">{item.n}</div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
