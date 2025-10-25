'use client';

import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

const SUGGESTED_QUESTIONS = [
  "What should I bring to my first oncologist appointment?",
  "How do I manage chemotherapy side effects?",
  "Where can I find financial assistance?",
  "What questions should I ask my doctor?"
];

const SAMPLE_RESPONSES: Record<string, string> = {
  default: "I'm your Cancer Navigator assistant. I can help you with appointment scheduling, understanding your care plan, finding resources, and answering questions about your journey. What would you like to know?",
  appointment: "For your first oncologist appointment, bring:\n\n• All medical records and test results\n• List of current medications\n• Insurance cards\n• A family member or friend for support\n• Written list of questions\n• Notebook for taking notes\n\nWould you like me to help you schedule an appointment?",
  side_effects: "Managing treatment side effects is important for your quality of life. Common strategies include:\n\n• Eating small, frequent meals\n• Staying hydrated\n• Getting adequate rest\n• Gentle exercise as tolerated\n• Anti-nausea medication as prescribed\n\nAlways report severe side effects to your care team immediately. Would you like more specific information about a particular side effect?",
  financial: "Financial assistance is available through several channels:\n\n• Friends of Cancer Patients (FOCP) - Financial aid program\n• Hospital social workers - Can guide you to resources\n• Insurance coverage review\n• Government support programs\n\nWould you like me to connect you with a financial counselor?",
  questions: "Great questions to ask your oncologist include:\n\n• What is my exact diagnosis and stage?\n• What are my treatment options?\n• What are the side effects?\n• What is the treatment timeline?\n• What results can I expect?\n• Are there clinical trials available?\n• What lifestyle changes should I make?\n\nWould you like me to help you prepare a personalized question list?"
};

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: "Hello! I'm your Cancer Navigator assistant. I'm here to help you 24/7 with questions about your care journey, appointments, resources, and more. How can I assist you today?",
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const getResponse = (question: string): string => {
    const lowerQuestion = question.toLowerCase();
    
    if (lowerQuestion.includes('appointment') || lowerQuestion.includes('book') || lowerQuestion.includes('schedule')) {
      return SAMPLE_RESPONSES.appointment;
    } else if (lowerQuestion.includes('side effect') || lowerQuestion.includes('chemo') || lowerQuestion.includes('treatment')) {
      return SAMPLE_RESPONSES.side_effects;
    } else if (lowerQuestion.includes('financial') || lowerQuestion.includes('money') || lowerQuestion.includes('cost') || lowerQuestion.includes('insurance')) {
      return SAMPLE_RESPONSES.financial;
    } else if (lowerQuestion.includes('question') || lowerQuestion.includes('ask')) {
      return SAMPLE_RESPONSES.questions;
    }
    
    return SAMPLE_RESPONSES.default;
  };

  const handleSend = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: inputValue,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI response delay
    setTimeout(() => {
      const response = getResponse(inputValue);
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: response,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, assistantMessage]);
      setIsTyping(false);
    }, 1000);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setInputValue(suggestion);
  };

  return (
    <>
      {/* Floating Chat Button */}
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg hover:scale-110 transition-transform z-50 bg-accent hover:bg-accent/90"
          size="icon"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-6 right-6 w-96 h-[600px] shadow-2xl flex flex-col z-50 border-primary/20">
          <CardHeader className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground rounded-t-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="p-2 bg-white/20 rounded-full">
                  <Bot className="h-5 w-5" />
                </div>
                <div>
                  <CardTitle className="text-lg">Care Assistant</CardTitle>
                  <p className="text-xs opacity-90">Always here to help</p>
                </div>
              </div>
              <Button
                onClick={() => setIsOpen(false)}
                variant="ghost"
                size="icon"
                className="text-primary-foreground hover:bg-white/20"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
          </CardHeader>

          <CardContent className="flex-1 flex flex-col p-0">
            {/* Messages */}
            <ScrollArea className="flex-1 p-4" ref={scrollRef}>
              <div className="space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex gap-2 ${
                      message.role === 'user' ? 'justify-end' : 'justify-start'
                    }`}
                  >
                    {message.role === 'assistant' && (
                      <div className="p-2 bg-primary/10 rounded-full h-8 w-8 flex items-center justify-center flex-shrink-0">
                        <Bot className="h-4 w-4 text-primary" />
                      </div>
                    )}
                    <div
                      className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                        message.role === 'user'
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-muted text-foreground'
                      }`}
                    >
                      <p className="text-sm whitespace-pre-line">{message.content}</p>
                      <p className="text-xs opacity-70 mt-1">
                        {message.timestamp.toLocaleTimeString([], {
                          hour: '2-digit',
                          minute: '2-digit'
                        })}
                      </p>
                    </div>
                    {message.role === 'user' && (
                      <div className="p-2 bg-accent/10 rounded-full h-8 w-8 flex items-center justify-center flex-shrink-0">
                        <User className="h-4 w-4 text-accent" />
                      </div>
                    )}
                  </div>
                ))}
                
                {isTyping && (
                  <div className="flex gap-2 justify-start">
                    <div className="p-2 bg-primary/10 rounded-full h-8 w-8 flex items-center justify-center">
                      <Bot className="h-4 w-4 text-primary" />
                    </div>
                    <div className="bg-muted rounded-2xl px-4 py-2">
                      <div className="flex gap-1">
                        <span className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                        <span className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                        <span className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </ScrollArea>

            {/* Suggested Questions (show when few messages) */}
            {messages.length <= 1 && (
              <div className="px-4 pb-2">
                <p className="text-xs text-muted-foreground mb-2">Try asking:</p>
                <div className="flex flex-wrap gap-2">
                  {SUGGESTED_QUESTIONS.slice(0, 2).map((question, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSuggestionClick(question)}
                      className="text-xs px-3 py-1 bg-secondary text-secondary-foreground rounded-full hover:bg-secondary/80 transition-colors"
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input Area */}
            <div className="p-4 border-t bg-card">
              <div className="flex gap-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Type your question..."
                  className="flex-1"
                />
                <Button
                  onClick={handleSend}
                  size="icon"
                  disabled={!inputValue.trim()}
                  className="bg-accent hover:bg-accent/90"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-2 text-center">
                Available 24/7 • Confidential & Secure
              </p>
            </div>
          </CardContent>
        </Card>
      )}
    </>
  );
}

