import React from 'react';
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search } from "lucide-react";

const QuestionAnswer = () => {
  return (
    <div className="max-w-3xl mx-auto p-4 space-y-6">
      {/* Search Section */}
      <div className="relative">
        <Input 
          type="text"
          placeholder="Type to enter your keywork..."
          className="pl-10 w-full border-pink-200 focus:border-pink-300"
        />
        <Search className="absolute left-3 top-2.5 h-5 w-5 text-pink-400" />
      </div>

      {/* Business Hours Card */}
      <Card className="border-pink-100">
        <CardHeader>
          <CardTitle className="text-xl text-pink-800">
            Shufuti's business days and business hours
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-gray-700">
            Shufuti's business days and business hours are 
            <span className="font-semibold"> from 10:00AM to 7:00PM on weekdays, excluding Saturdays, Sundays, and holidays</span>
          </p>
          <p className="text-gray-700">
            For inquiries received on weekends, holidays, or after business hours, we will respond 
            <span className="font-semibold"> in order from the next business day</span>.
          </p>
          <p className="text-gray-700">
            In addition, we will announce our closures during major holidays such as the New Year holidays and Golden Week in the "News" section.
          </p>
        </CardContent>
      </Card>

      {/* FAQ Section */}
      <Card className="border-pink-100">
        <CardHeader>
          <CardTitle className="text-xl text-pink-800">
            Frequently Asked Questions
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <h3 className="font-semibold text-pink-700">
              ▼ I registered a job on Saturday, has it been published yet?
            </h3>
            <p className="text-gray-700">
              For jobs received on weekends and holidays, we will process them from the next business day, Monday, and notify you of the results. This will take longer than usual, so please register well in advance.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Related Articles */}
      <Card className="border-pink-100">
        <CardHeader>
          <CardTitle className="text-xl text-pink-800">
            Related articles
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {[
              'Get paid',
              'Estimated hourly rate',
              'Prohibited acts for clients',
              'About the "Advance Payment" System',
              'Identity verification for those living overseas'
            ].map((article, index) => (
              <li key={index}>
                <a href="#" className="text-pink-600 hover:text-pink-800 hover:underline">
                  {article}
                </a>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Footer Links */}
      <div className="text-center space-y-2 text-sm">
        <p className="text-gray-600">
          If you can't find what you're looking for or the problem persists, please{' '}
          <a href="#" className="text-pink-600 hover:text-pink-800 hover:underline">contact us</a> here.
        </p>
        <p className="text-gray-600">
          If you want to return to the Shufuti site, please{' '}
          <a href="#" className="text-pink-600 hover:text-pink-800 hover:underline">click here</a>.
        </p>
      </div>
    </div>
  );
};

export default QuestionAnswer;