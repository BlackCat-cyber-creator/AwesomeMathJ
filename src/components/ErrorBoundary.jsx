import React from 'react';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('AwesomeMathJ ErrorBoundary caught an error:', error, errorInfo);
    this.setState({ errorInfo });
  }

  handleReload = () => {
    window.location.reload();
  };

  handleGoHome = () => {
    window.location.href = '/';
  };

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '2rem',
          backgroundColor: '#F8FAFC',
          fontFamily: 'Plus Jakarta Sans, sans-serif'
        }}>
          <div style={{
            maxWidth: '520px',
            width: '100%',
            backgroundColor: '#FFFFFF',
            borderRadius: '1rem',
            padding: '2.5rem',
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.08), 0 8px 10px -6px rgba(0, 0, 0, 0.04)',
            border: '1px solid #E2E8F0',
            textAlign: 'center'
          }}>
            <div style={{
              width: '56px',
              height: '56px',
              borderRadius: '50%',
              backgroundColor: '#FEE2E2',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1.5rem',
              color: '#DC2626'
            }}>
              <AlertTriangle size={28} />
            </div>

            <h2 style={{
              fontSize: '1.4rem',
              fontWeight: 800,
              color: '#0F172A',
              marginBottom: '0.75rem'
            }}>
              Terjadi Kesalahan Tampilan
            </h2>

            <p style={{
              fontSize: '0.9rem',
              color: '#64748B',
              lineHeight: 1.6,
              marginBottom: '1.75rem'
            }}>
              Aplikasi mengalami kendala saat menampilkan materi. Anda dapat mencoba memuat ulang halaman ini.
            </p>

            {this.state.error && (
              <div style={{
                backgroundColor: '#F1F5F9',
                padding: '0.85rem 1rem',
                borderRadius: '0.5rem',
                fontSize: '0.75rem',
                color: '#475569',
                textAlign: 'left',
                marginBottom: '1.75rem',
                fontFamily: 'monospace',
                overflowX: 'auto'
              }}>
                {this.state.error.toString()}
              </div>
            )}

            <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center' }}>
              <button
                onClick={this.handleReload}
                className="btn btn-royal"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.7rem 1.25rem',
                  fontSize: '0.875rem'
                }}
              >
                <RefreshCw size={15} />
                <span>Muat Ulang</span>
              </button>

              <button
                onClick={this.handleGoHome}
                className="btn btn-outline"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.7rem 1.25rem',
                  fontSize: '0.875rem'
                }}
              >
                <Home size={15} />
                <span>Beranda</span>
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
