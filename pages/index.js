import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "../components/ui/alert";
import { Badge } from "../components/ui/badge";
import { Heart, Star, AlertCircle, CheckCircle, Info, AlertTriangle } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

export default function Home() {
  return (
    <>
      <Head>
        <title>Shadcn/ui Components Showcase</title>
        <meta name="description" content="A beautiful showcase of Shadcn/ui components including cards, buttons, alerts, and badges" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
        <motion.div
          className="container mx-auto px-4 py-16"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Header */}
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
              Shadcn/ui Showcase
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore beautiful, accessible, and customizable UI components built with Radix UI and Tailwind CSS
            </p>
          </motion.div>

          {/* Button Section */}
          <motion.section className="mb-16" variants={itemVariants}>
            <div className="text-center mb-8">
              <h2 className="text-3xl font-semibold mb-4">Button Components</h2>
              <p className="text-muted-foreground">Various button styles and variants</p>
            </div>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="default" size="lg">
                <Star className="w-4 h-4 mr-2" />
                Default Button
              </Button>
              <Button variant="secondary" size="lg">
                Secondary
              </Button>
              <Button variant="destructive" size="lg">
                Destructive
              </Button>
              <Button variant="outline" size="lg">
                Outline
              </Button>
              <Button variant="ghost" size="lg">
                Ghost
              </Button>
              <Button variant="link" size="lg">
                Link Button
              </Button>
            </div>
            <div className="flex flex-wrap gap-4 justify-center mt-4">
              <Button size="sm">Small</Button>
              <Button size="default">Default</Button>
              <Button size="lg">Large</Button>
              <Button size="icon">
                <Heart className="w-4 h-4" />
              </Button>
            </div>
          </motion.section>

          {/* Card Section */}
          <motion.section className="mb-16" variants={itemVariants}>
            <div className="text-center mb-8">
              <h2 className="text-3xl font-semibold mb-4">Card Components</h2>
              <p className="text-muted-foreground">Flexible content containers</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Star className="w-5 h-5 text-yellow-500" />
                    Featured Card
                  </CardTitle>
                  <CardDescription>
                    This is a beautiful card component with a header, content, and footer.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Card content goes here. You can add any content you want, including images, text, and other components.
                  </p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm">Cancel</Button>
                  <Button size="sm">Save</Button>
                </CardFooter>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle>Simple Card</CardTitle>
                  <CardDescription>
                    A minimal card design for clean layouts.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">Progress</span>
                      <span className="text-sm text-muted-foreground">75%</span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full w-3/4"></div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle>Interactive Card</CardTitle>
                  <CardDescription>
                    Cards can contain interactive elements.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="default">React</Badge>
                    <Badge variant="secondary">Next.js</Badge>
                    <Badge variant="outline">Tailwind</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    This card showcases badges and interactive elements.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">
                    <Heart className="w-4 h-4 mr-2" />
                    Like
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </motion.section>

          {/* Alert Section */}
          <motion.section className="mb-16" variants={itemVariants}>
            <div className="text-center mb-8">
              <h2 className="text-3xl font-semibold mb-4">Alert Components</h2>
              <p className="text-muted-foreground">Important messages and notifications</p>
            </div>
            <div className="space-y-4 max-w-4xl mx-auto">
              <Alert>
                <Info className="h-4 w-4" />
                <AlertTitle>Info Alert</AlertTitle>
                <AlertDescription>
                  This is an informational alert. Use it to provide helpful information to users.
                </AlertDescription>
              </Alert>

              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Error Alert</AlertTitle>
                <AlertDescription>
                  Something went wrong. Please check your input and try again.
                </AlertDescription>
              </Alert>

              <Alert className="border-green-200 bg-green-50 text-green-800 dark:border-green-800 dark:bg-green-950 dark:text-green-200">
                <CheckCircle className="h-4 w-4" />
                <AlertTitle>Success Alert</AlertTitle>
                <AlertDescription>
                  Great! Your action was completed successfully.
                </AlertDescription>
              </Alert>

              <Alert className="border-yellow-200 bg-yellow-50 text-yellow-800 dark:border-yellow-800 dark:bg-yellow-950 dark:text-yellow-200">
                <AlertTriangle className="h-4 w-4" />
                <AlertTitle>Warning Alert</AlertTitle>
                <AlertDescription>
                  Please be careful. This action cannot be undone.
                </AlertDescription>
              </Alert>
            </div>
          </motion.section>

          {/* Badge Section */}
          <motion.section className="mb-16" variants={itemVariants}>
            <div className="text-center mb-8">
              <h2 className="text-3xl font-semibold mb-4">Badge Components</h2>
              <p className="text-muted-foreground">Small status indicators and labels</p>
            </div>
            <div className="space-y-6 max-w-4xl mx-auto">
              <div className="text-center">
                <h3 className="text-lg font-medium mb-4">Badge Variants</h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge variant="default">Default</Badge>
                  <Badge variant="secondary">Secondary</Badge>
                  <Badge variant="destructive">Destructive</Badge>
                  <Badge variant="outline">Outline</Badge>
                </div>
              </div>

              <div className="text-center">
                <h3 className="text-lg font-medium mb-4">Technology Stack</h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200 dark:bg-blue-900 dark:text-blue-200">
                    React
                  </Badge>
                  <Badge className="bg-black text-white hover:bg-gray-800">
                    Next.js
                  </Badge>
                  <Badge className="bg-cyan-100 text-cyan-800 hover:bg-cyan-200 dark:bg-cyan-900 dark:text-cyan-200">
                    Tailwind CSS
                  </Badge>
                  <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-200 dark:bg-purple-900 dark:text-purple-200">
                    Framer Motion
                  </Badge>
                  <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-200 dark:bg-orange-900 dark:text-orange-200">
                    Radix UI
                  </Badge>
                </div>
              </div>

              <div className="text-center">
                <h3 className="text-lg font-medium mb-4">Status Badges</h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                    ✓ Active
                  </Badge>
                  <Badge className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200">
                    ⚠ Pending
                  </Badge>
                  <Badge className="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200">
                    ✗ Inactive
                  </Badge>
                  <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                    ℹ Info
                  </Badge>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Footer */}
          <motion.footer className="text-center pt-16 border-t" variants={itemVariants}>
            <p className="text-muted-foreground">
              Built with ❤️ using{' '}
              <Badge variant="outline" className="mx-1">
                Shadcn/ui
              </Badge>
              ,{' '}
              <Badge variant="outline" className="mx-1">
                Next.js
              </Badge>
              , and{' '}
              <Badge variant="outline" className="mx-1">
                Tailwind CSS
              </Badge>
            </p>
          </motion.footer>
        </motion.div>
      </div>
    </>
  );
}
